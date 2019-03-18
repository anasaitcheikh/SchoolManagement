/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Mark;
import etu.upec.m2.model.MarkId;
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
public class MarkService implements IMarkService {

    private static Logger log = Logger.getLogger(MarkService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public MarkId createMark(Mark mark) {
        em.persist(mark);
        return mark.getId();
    }

    @Override
    public MarkId deleteMark(MarkId id) {
        em.remove(em.find(Mark.class, id));
        return id;
    }

    @Override
    public MarkId updateMark(MarkId id, Mark newMark) {
        Mark mark=getMarkById(id);
        if(mark == null) {
            return null;
        }
        
        mark.setMark(newMark.getMark());
        em.merge(mark.getId());
        return id;
    }

    @Override
    public List<Mark> getAllMark() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Mark getMarkById(MarkId id) {
        try{
            TypedQuery<Mark> query =  em.createNamedQuery("findMarkById", Mark.class);
            //query.setParameter("studentId", id);
            //query.setParameter("subjectId", id);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public List<Mark> getAllMarkByIdStudent(Long idStudent) {
        try{
            return em.createNamedQuery("findAllMarkByIdStudent", Mark.class)
                                      .setParameter("studentId", idStudent)
                                      .getResultList();
        }catch(NoResultException e){
            return null;
        }
        
    }
    
}
