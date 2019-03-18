/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Student;
import etu.upec.m2.model.Subject;
import etu.upec.m2.model.SubjectName;
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
 * @author Nouhayla
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class SubjectService implements ISubjectService {

    private static Logger log = Logger.getLogger(SubjectService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createSubject(Subject subject) {
        em.persist(subject);
        return subject.getId();
    }

    @Override
    public Long deleteSubject(Long id) {
        em.remove(em.find(Student.class, id));
        return id;
    }

    @Override
    public Long updateSubject(Long id, Subject newSubject) {
        Subject subject=getSubjectById(id);
        if(subject == null) {
            return new Long(0);
        }
        
        subject.setName(newSubject.getName());
        em.merge(subject);
        return id;
    }

    @Override
    public List<Subject> getAllSubject() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Subject getSubjectById(Long id) {
        try{
            TypedQuery<Subject> query =  em.createNamedQuery("findSubjectById", Subject.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }

    
    
}
