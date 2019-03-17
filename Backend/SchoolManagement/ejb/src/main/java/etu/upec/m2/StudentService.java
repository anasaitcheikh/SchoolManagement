/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Student;
import etu.upec.m2.model.UserStatus;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
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
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createStudent(Student student) {
        em.persist(student);
        return student.getId();
    }

    @Override
    public Long deleteStudent(Long id) {
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
        student.setStatus(newStudent.getStatus());
        student.setStudentClass(newStudent.getStudentClass());
        
        em.merge(student);
        return id;
    }

    @Override
    public List<Student> getAllStudent() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Student getStudentById(Long id) {
        TypedQuery<Student> query =  em.createNamedQuery("findStudentById", Student.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
        TypedQuery<Student> query =  em.createNamedQuery("findStudentByIdAndPassword", Student.class);
        query.setParameter("id", id);
        query.setParameter("password", oldPassword);
        Student student = query.getSingleResult();
        
        if(student == null) {
            return new Long(0);
        }
        
        student.setPassword(newPassword);
        em.merge(student);
        return student.getId();
    }
    
}
