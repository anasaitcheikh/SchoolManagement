/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Mark;
import etu.upec.m2.model.MarkId;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IMarkService {
     
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    MarkId createMark(Mark mark);
    MarkId deleteMark(MarkId id);
    MarkId updateMark(MarkId id, Mark newMark);
    List<Mark> getAllMark();
    Mark getMarkById(MarkId id);
    List<Mark> getAllMarkByIdStudent(Long idStudent);
}
