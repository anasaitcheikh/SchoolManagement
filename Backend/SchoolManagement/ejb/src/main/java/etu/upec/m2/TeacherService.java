/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Teacher;
import etu.upec.m2.model.TeacherSpecialty;
import etu.upec.m2.model.UserStatus;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
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
public class TeacherService implements ITeacherService {

    private static Logger log = Logger.getLogger(TeacherService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    public Long createTeacher(Teacher teacher) {
        em.persist(teacher);
        return teacher.getId();
    }

    @Override
    public Long deleteTeacher(Long id) {
        em.remove(em.find(Teacher.class, id));
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
        teacher.setStatus(newTeacher.getStatus());
        em.merge(teacher);
        return id;
    }

    @Override
    public List<Teacher> getAllTeacher() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Teacher getTeacherById(Long id) {
        TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherById", Teacher.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
        TypedQuery<Teacher> query =  em.createNamedQuery("findTeacherByIdAndPassword", Teacher.class);
        query.setParameter("id", id);
        query.setParameter("password", oldPassword);
        Teacher teacher = query.getSingleResult();
        
        if(teacher == null) {
            return new Long(0);
        }
        
        teacher.setPassword(newPassword);
        em.merge(teacher);
        return teacher.getId();
    }
    
}
