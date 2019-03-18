/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.CourseMaterial;
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
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createCourseMaterial(CourseMaterial newCourseMaterial) {
        em.persist(newCourseMaterial);
        return newCourseMaterial.getId();
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
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
        
        courseMaterial.setLink(newCourseMaterial.getLink());
        em.merge(newCourseMaterial);
        return courseMaterial.getId();
    }

    @Override
    public List<CourseMaterial> getAllCourseMaterial() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
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
