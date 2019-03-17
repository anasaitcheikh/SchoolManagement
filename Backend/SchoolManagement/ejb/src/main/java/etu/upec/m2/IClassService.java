/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Class;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IClassService { 
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createClass(Class c);
    Long deleteClass(Long id);
    Long updateClass(Long id, Class newClass);
    List<Class> getAllClass();
    Class getClassById(Long id);
}
