/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Course;
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
public class CourseService implements ICourseService {

    private static Logger log = Logger.getLogger(CourseService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createCourse(Course course) {
        em.persist(course);
        return course.getId();
    }

    @Override
    public Long deleteCourse(Long id) {
        em.remove(em.find(Course.class, id));
        return id;
    }

    @Override
    public Long updateCourse(Long id, Course newCourse) {
        Course course=getCourseById(id);
        if(course == null) {
            return new Long(0);
        }
        
        course.setClasse(newCourse.getClasse());
        course.setClassroom(newCourse.getClassroom());
        course.setDate(newCourse.getDate());
        course.setStatus(newCourse.getStatus());
        course.setSubject(newCourse.getSubject());
        course.setTeacher(newCourse.getTeacher());
        course.setTime(newCourse.getTime());
        em.merge(course);
        return null;
    }

    @Override
    public List<Course> getAllCourses() {
        try{
            List<Course> courses = em.createNamedQuery("findAllCourses", Course.class)
                     .getResultList();
            return  courses;
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public Course getCourseById(Long id) {
        try{
            TypedQuery<Course> query =  em.createNamedQuery("findCourseById", Course.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }    
    }

    @Override
    public List<Course> getAllCoursesByClassId(Long idClass) {
        try{
            List<Course> courses = em.createNamedQuery("findAllCoursesByClassId", Course.class)
                     .setParameter("id_class", idClass)
                     .getResultList();
            return  courses;
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public List<Course> getAllCoursesByTeacherId(Long idTeacher) {
        try{
            List<Course> courses = em.createNamedQuery("findAllCoursesByTeacherId", Course.class)
                     .setParameter("id_teacher", idTeacher)
                     .getResultList();
            return  courses;
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public List<Course> getAllCoursesByStatus(boolean status) {
        try{
            List<Course> courses = em.createNamedQuery("findAllCoursesByStatus", Course.class)
                     .setParameter("status", status)
                     .getResultList();
            return  courses;
        }catch(NoResultException e){
            return null;
        }
    }

    @Override
    public List<Course> getAllCoursesByStudentId(Long idStudent) {
        try{
            List<Course> courses = em.createNamedQuery("findAllCoursesByStudentId", Course.class)
                     .setParameter("id_student", idStudent)
                     .getResultList();
            return  courses;
        }catch(NoResultException e){
            return null;
        }
    }
    
}
