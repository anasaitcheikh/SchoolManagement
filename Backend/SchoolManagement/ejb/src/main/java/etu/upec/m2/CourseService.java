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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Course> getAllCourse() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Course getCourseById(Long id) {
        TypedQuery<Course> query =  em.createNamedQuery("findCourseById", Course.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }
    
}
