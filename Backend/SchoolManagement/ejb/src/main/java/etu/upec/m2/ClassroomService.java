/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Classroom;
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
public class ClassroomService implements IClassroomService{

    private static Logger log = Logger.getLogger(ClassroomService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createClassroom(Classroom classroom) {
        em.persist(classroom);
        return classroom.getId();
    }

    @Override
    public Long deleteClassroom(Long id) {
        em.remove(em.find(Classroom.class, id));
        return id;
    }

    @Override
    public Long updateClassroom(Long id, Classroom newClassroom) {
        Classroom classroom=getClassroomById(id);
        if(classroom == null) {
            return new Long(0);
        }
        classroom.setCapacity(newClassroom.getCapacity());
        classroom.setFloorNumber(newClassroom.getFloorNumber());
        classroom.setRoomNumber(newClassroom.getRoomNumber());
        em.merge(newClassroom);
        return id;
    }

    @Override
    public List<Classroom> getAllClassroom() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Classroom getClassroomById(Long id) {
        try{
            TypedQuery<Classroom> query =  em.createNamedQuery("findClassroomById", Classroom.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
}
