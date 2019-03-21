/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Mark;
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
    public Long createMark(Mark mark) {
        em.persist(mark);
        return mark.getId();
    }

    @Override
    public Long deleteMark(Long id) {
        try {
            Mark mark = em.createNamedQuery("findMarkById", Mark.class)
                    .setParameter("id", id)
                    .getSingleResult();
            em.remove(mark);
            return mark.getId();
        }
        catch(NoResultException e) {
            return -1L;
        }
    }

    @Override
    public Long updateMark(Long id, Mark newMark) {
        try {
            Mark mark = em.createNamedQuery("findMarkById", Mark.class)
                    .setParameter("id", id)
                    .getSingleResult();
            mark.setMark(newMark.getMark());
            em.merge(mark);
            return id;
        }
        catch(NoResultException e) {
            return -1L;
        }
    }

    @Override
    public List<Object[]> getAllMarkByIdStudent(Long idStudent) {
        try {
            return em.createNamedQuery("findAllMarkByIdStudent", Object[].class)
                    .setParameter("studentId", idStudent)
                    .getResultList();
        } catch (NoResultException e) {
            return null;
        }

    }

    @Override
    public List<Object[]> getAllMarkBySubjectIdAndClassId(Long subjectId, Long classId) {
        return em.createNamedQuery("findAllMarkBySujectIdAndClassId", Object[].class)
                .setParameter("classId", classId)
                .setParameter("subjectId", subjectId)
                .getResultList();
    }

}
