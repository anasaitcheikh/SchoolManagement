/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Subject;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface ISubjectService {
     
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    int createSubject(Subject subject);
    int deleteSubject(Long id);
    int updateSubject(Long id);
    List<Subject> getAllSubject();
    Subject getSubjectById();
}
