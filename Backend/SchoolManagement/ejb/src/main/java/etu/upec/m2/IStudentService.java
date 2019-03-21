/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Student;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IStudentService {
     
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createStudent(Student student);
    Long deleteStudent(Long id);
    Long updateStudent(Long id, Student newStudent);
    List<Student> getAllStudent();
    Student getStudentById(Long id);
    Long resetPassword(Long id, String oldPassword, String newPassword);
    Student getStudentByEmailAndPassword(String email, String password);
    List<Student> getAllStudentsByClassId(Long id);
}
