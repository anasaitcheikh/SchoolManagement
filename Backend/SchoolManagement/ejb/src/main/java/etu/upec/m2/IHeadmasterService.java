/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Headmaster;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IHeadmasterService {
    
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createHeadmaster(Headmaster headmaster);
    Long deleteHeadmaster(Long id);
    Long updateHeadmaster(Long id, Headmaster newHeadmaster);
    List<Headmaster> getAllHeadmaster();
    Headmaster getHeadmasterById(Long id);
    Long resetPassword(Long id, String oldPassword, String newPassword);
    Headmaster getHeadmasterByEmailAndPassword(String email, String password);
}
