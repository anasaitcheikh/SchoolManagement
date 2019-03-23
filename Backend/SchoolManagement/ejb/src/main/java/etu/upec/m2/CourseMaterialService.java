/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.CourseMaterial;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author ademo
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class CourseMaterialService implements ICourseMaterialService {

    private static Logger log = Logger.getLogger(CourseMaterialService.class.getName());
    private static final String FILES_DIRECTORY = System.getProperty("user.dir") + "/";
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createCourseMaterial(String name, String description, InputStream inputStream){
        String fileExtension = name.substring(name.indexOf('.') + 1);
        String fileName = name.substring(0, name.indexOf('.')) + "-" + LocalDateTime.now().toString();
        name = fileName + "." +fileExtension;
        
        File file = new File(FILES_DIRECTORY + name);
        System.out.println("Working Directory = " + System.getProperty("user.dir"));
        OutputStream outputStream;
        
        try {
            outputStream = new FileOutputStream(file);
            byte[] buffer = new byte[1024];
            int bytesRead;
            
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            inputStream.close();
            
            outputStream.flush();
            outputStream.close();
            
            CourseMaterial courseMaterial = new CourseMaterial();
            courseMaterial.setName(name);
            courseMaterial.setDescription(description);
            
            em.persist(courseMaterial);
            return courseMaterial.getId();
        } catch (Exception ex) {
            System.err.println(ex);
            return -1L;
        }
    }

    @Override
    public Long deleteCourseMaterial(Long id) {
        em.remove(em.find(CourseMaterial.class, id));
        return id;
    }

    @Override
    public Long updateCourseMaterial(Long id, CourseMaterial newCourseMaterial) {
        CourseMaterial courseMaterial=getCourseMaterialById(id);
        if(courseMaterial == null) {
            return new Long(0);
        }
        
        courseMaterial.setName(newCourseMaterial.getName());
        em.merge(newCourseMaterial);
        return courseMaterial.getId();
    }

    @Override
    public List<CourseMaterial> getAllCourseMaterial() {
        TypedQuery<CourseMaterial> typedQuery = em.createNamedQuery("getAllCourseMaterials", CourseMaterial.class);
        return typedQuery.getResultList();
    }
    
     @Override
    public File downloadCourseMaterial(Long id) {
        CourseMaterial courseMaterial;
        try {
            courseMaterial = em.find(CourseMaterial.class, id);
             System.err.println("courseMaterial =>>>>>>>>>> " + courseMaterial);
        }
        catch(NoResultException e) {
            System.err.println("erro =>>>>>>>>>>");
            e.printStackTrace();
            return null;
        }
        
        File file = new File(FILES_DIRECTORY + courseMaterial.getName());
        return file;
    }

    @Override
    public CourseMaterial getCourseMaterialById(Long id) {
        try{
            TypedQuery<CourseMaterial> query =  em.createNamedQuery("findCourseMaterialById", CourseMaterial.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }    
    }
    
}
