/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Class;
import etu.upec.m2.model.Student;
import java.util.List;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.logging.Logger;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;

/**
 *
 * @author ademo
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class ClassService implements IClassService{

    private static Logger log = Logger.getLogger(ClassService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createClass(Class c) {
        em.persist(c);
        return c.getId();
    }

    @Override
    public Long deleteClass(Long id) {
        em.remove(em.find(Class.class, id));
        return id;
    }

    @Override
    public Long updateClass(Long id, Class newClass) {
        Class c=getClassById(id);
        if(c == null) {
            return new Long(0);
        }
        c.setGrade(newClass.getGrade());
        c.setLevel(newClass.getLevel());
        c.setName(newClass.getName());
        c.setSchoolYear(newClass.getSchoolYear());  
        em.merge(c);
        return id;
    }

    @Override
    public List<Class> getAllClasses() {
            List<Class> classes = em.createNamedQuery("findAllClasses", Class.class)
            .getResultList();
        return classes;
    }

    @Override
    public Class getClassById(Long id) {
        try{
            TypedQuery<Class> query =  em.createNamedQuery("findClassById", Class.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
}
