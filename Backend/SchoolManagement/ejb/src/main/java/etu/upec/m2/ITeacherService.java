/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Teacher;
import java.util.List;

/**
 *
 * @author ademo
 */
public interface ITeacherService {
    
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createTeacher(Teacher teacher);
    Long deleteTeacher(Long id);
    Long updateTeacher(Long id, Teacher newTeacher);
    List<Teacher> getAllTeacher();
    Teacher getTeacherById(Long id);
    Long resetPassword(Long id, String oldPassword, String newPassword);
    
    
}
