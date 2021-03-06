/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Course;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface ICourseService {
     
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createCourse(Course course);
    Long deleteCourse(Long id);
    Long updateCourse(Long id, Course newCourse);
    Long updateStatusCourse(Long id);
    List<Course> getAllCourses();
    Course getCourseById(Long id);
    List<Course> getAllCoursesByClassId(Long idClass);
    
    List<Course> getAllCoursesByTeacherId(Long idTeacher);
    List<Course> getAllCoursesByStudentId(Long idStudent);
    List<Course> getAllCoursesByStatus(boolean status);
}
