/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Course;
import etu.upec.m2.model.Message;
import etu.upec.m2.model.Teacher;
import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.ejb.Stateless;
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
public class TeacherService implements ITeacherService {

    private static Logger log = Logger.getLogger(TeacherService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @EJB
    IMessageService messageService;
    
    @EJB
    ICourseService courseService;
    
    @Override
    public Long createTeacher(Teacher teacher) {
        em.persist(teacher);
        return teacher.getId();
    }

    @Override
    public Long deleteTeacher(Long id) {
        //teacher id a null dans sms et dans courses
        
        List<Message> messages=messageService.getMessagesBySenderIdOrRecipientId(id);
        for (Message message : messages){
            if(Objects.equals(message.getRecipient().getId(), id)){
                message.setRecipient(null);
                messageService.UpdateMessage(message.getId(), message);
            }
            if(Objects.equals(message.getSender().getId(), id)){
                message.setSender(null);
                messageService.UpdateMessage(message.getId(), message);
            }
        }
        
        List<Course> courses=courseService.getAllCoursesByTeacherId(id);
        for (Course course : courses){
            courseService.deleteCourse(course.getId());
        }
        
        em.remove(em.find(Teacher.class, id));
        System.out.println("end");
        return id;
    }

    @Override
    public Long updateTeacher(Long id, Teacher newTeacher) {
        Teacher teacher = getTeacherById(id);
        if(teacher == null) {
            return new Long(0);
        }
        
        teacher.setBirthDate(newTeacher.getBirthDate());
        teacher.setEmail(newTeacher.getEmail());
        teacher.setFirstname(newTeacher.getFirstname());
        teacher.setLastname(newTeacher.getLastname());
        teacher.setSpecialty(newTeacher.getSpecialty());
        em.merge(teacher);
        return id;
    }

    @Override
    public List<Teacher> getAllTeacher() {
        List<Teacher> teachers = em.createNamedQuery("findAllTeacher", Teacher.class)
            .getResultList();
        return teachers;
    }

    @Override
    public Teacher getTeacherById(Long id) {
        try{
            TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherById", Teacher.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
        Teacher teacher;
        try{
            TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherByIdAndPassword", Teacher.class);
            query.setParameter("id", id);
            query.setParameter("password", oldPassword);
            teacher = query.getSingleResult();
        }catch(NoResultException e){
            teacher= null;
        }
        
        if(teacher == null) {
            return new Long(0);
        }
        
        teacher.setPassword(newPassword);
        em.merge(teacher);
        return teacher.getId();
    }
    
    @Override
    public Teacher getTeacherByEmailAndPassword(String email, String password) {
        try{
            TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherByEmailAndPassword", Teacher.class);
            query.setParameter("email", email);
            query.setParameter("password", password);

            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }    
    }

    @Override
    public List<Teacher> getAllTeachersByClassId(Long id) {
               try{
           TypedQuery<Teacher> query =  em.createNamedQuery("findAllTeachersByClassId", Teacher.class);
           query.setParameter("id_class", id);
           
           return query.getResultList();
        }catch(NoResultException e){
            return null;
        } 
    }
}
