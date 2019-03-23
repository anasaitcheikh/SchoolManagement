/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Course;
import etu.upec.m2.model.Mark;
import etu.upec.m2.model.Message;
import etu.upec.m2.model.Student;
import etu.upec.utils.EncryptPassword;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
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
public class StudentService implements IStudentService {

    private static Logger log = Logger.getLogger(StudentService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @EJB
    IMessageService messageService;
    
    @EJB
    IMarkService markService;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createStudent(Student student) {
        try {
            String encryptPassword=EncryptPassword.encryptPassword(student.getPassword(),"SHA1");
            student.setPassword(encryptPassword);
            System.out.println("encryptPasssword=>"+encryptPassword);
            em.persist(student);
            return student.getId();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(StudentService.class.getName()).log(Level.SEVERE, null, ex);
            return new Long(0);
        } 
    }

    @Override
    public Long deleteStudent(Long id) {
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
        
        List<Mark> allMark=markService.getAllMarkByIdStudent(id);
        for (Mark mark : allMark){
            markService.deleteMark(mark.getId());
        }
        em.remove(em.find(Student.class, id));
        return id;
    }

    @Override
    public Long updateStudent(Long id, Student newStudent) {
        Student student=getStudentById(id);
        if(student == null) {
            return new Long(0);
        }
          
        student.setBirthDate(newStudent.getBirthDate());
        student.setEmail(newStudent.getEmail());
        student.setFirstname(newStudent.getFirstname());
        student.setLastname(newStudent.getLastname());
        student.setStudentClass(newStudent.getStudentClass());
        
        em.merge(student);
        return id;
    }

    @Override
    public List<Student> getAllStudent() {
        List<Student> students = em.createNamedQuery("findAllStudent", Student.class)
            .getResultList();
        return students;
    }

    @Override
    public Student getStudentById(Long id) {
        try{
            TypedQuery<Student> query =  em.createNamedQuery("findStudentById", Student.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
//        Student student;
//        try{
//            TypedQuery<Student> query =  em.createNamedQuery("findStudentByIdAndPassword", Student.class);
//            String encryptOldPassword=EncryptPassword.encryptPassword(oldPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptOldPassword);
//            query.setParameter("id", id);
//            query.setParameter("password", encryptOldPassword);
//            student = query.getSingleResult();
//        }catch(NoResultException e){
//            student= null;
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(StudentService.class.getName()).log(Level.SEVERE, null, ex);
//            student=null;
//        }
//        if(student == null) {
//            return -1L;
//        }
//        
//        try {
//            String encryptPassword=EncryptPassword.encryptPassword(newPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptPassword);
//            student.setPassword(encryptPassword);
//            em.merge(student);
//            return student.getId();
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(StudentService.class.getName()).log(Level.SEVERE, null, ex);
//        }
        return -1L;
    }
    
    @Override
    public Student getStudentByEmailAndPassword(String email, String password) {
        try{
            TypedQuery<Student> query =  em.createNamedQuery("findStudentByEmailAndPassword", Student.class);
            String encryptPassword=EncryptPassword.encryptPassword(password,"SHA1");
            System.out.println("etu.upec.m2.StudentService.getStudentByEmailAndPassword()=>"+encryptPassword);
            query.setParameter("email", email);
            query.setParameter("password", encryptPassword);
            
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(StudentService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    @Override
    public List<Student> getAllStudentsByClassId(Long id) {
        try{
           TypedQuery<Student> query =  em.createNamedQuery("findAllStudentsByClassId", Student.class);
           query.setParameter("id_class", id);
           
           return query.getResultList();
        }catch(NoResultException e){
            return null;
        } 
    }
}
