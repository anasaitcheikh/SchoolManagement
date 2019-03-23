/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.CourseMaterial;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface ICourseMaterialService {
   
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createCourseMaterial(String name, String desciption, InputStream inputStream);
    Long deleteCourseMaterial(Long id);
    Long updateCourseMaterial(Long id, CourseMaterial newCourseMaterial);
    List<CourseMaterial> getAllCourseMaterial();
    CourseMaterial getCourseMaterialById(Long id);
    File downloadCourseMaterial(Long id);
}
