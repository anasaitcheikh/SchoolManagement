/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Course;
import etu.upec.m2.model.Message;
import etu.upec.m2.model.Teacher;
import etu.upec.utils.EncryptPassword;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;
import java.util.logging.Level;
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
        try {
            String encryptPassword=EncryptPassword.encryptPassword(teacher.getPassword(),"SHA1");
            teacher.setPassword(encryptPassword);
            System.out.println("encryptPasssword=>"+encryptPassword);
            em.persist(teacher);
            return teacher.getId();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            return new Long(0);
        } 
    }

    @Override
    public Long deleteTeacher(Long id) {
        
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
        System.out.println("id bis->"+id);
        Teacher teacher = getTeacherById(id);
        if(teacher == null) {
            return new Long(0);
        }
        System.out.println("debut maj");
        teacher.setBirthDate(newTeacher.getBirthDate());
        teacher.setEmail(newTeacher.getEmail());
        teacher.setFirstname(newTeacher.getFirstname());
        teacher.setLastname(newTeacher.getLastname());
        teacher.setSpecialty(newTeacher.getSpecialty());
        System.out.println("fin maj");
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
//        Teacher teacher;
//        try{
//            TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherByIdAndPassword", Teacher.class);
//            String encryptOldPassword=EncryptPassword.encryptPassword(oldPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptOldPassword);
//            query.setParameter("id", id);
//            query.setParameter("password", oldPassword);
//            teacher = query.getSingleResult();
//        }catch(NoResultException e){
//            teacher= null;
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(TeacherService.class.getName()).log(Level.SEVERE, null, ex);
//            teacher=null;
//        }
//        if(teacher == null) {
//            return -1L;
//        }
//        
//        try {
//            String encryptPassword=EncryptPassword.encryptPassword(newPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptPassword);
//            teacher.setPassword(encryptPassword);
//            em.merge(teacher);
//            return teacher.getId();
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(TeacherService.class.getName()).log(Level.SEVERE, null, ex);
//        }
        return -1L;
    }
    
    @Override
    public Teacher getTeacherByEmailAndPassword(String email, String password) {
        try{
            TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherByEmailAndPassword", Teacher.class);
            String encryptPassword=EncryptPassword.encryptPassword(password,"SHA1");
            System.out.println("etu.upec.m2.TeacherService.getTeacherByEmailAndPassword()=>"+encryptPassword);
            query.setParameter("email", email);
            query.setParameter("password", encryptPassword);
            
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(TeacherService.class.getName()).log(Level.SEVERE, null, ex);
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
