/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.User;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IUserService {
    
    //defini les paramètres et les types de retour  
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createUser(User user);
    Long deleteUser(Long id);
    Long updateUser(Long id, User user);
    List<User> getAllUser();
    User getUserById(Long id);
    Long resetPassword(Long id, String oldPassword, String newPassword);
    User getUserByEmailAndPassword(String email, String password);
    List<String> getAllEmailForStudent();
    List<String> getAllEmailForHeadmasterAndTeacher();
    Long getUserByEmail(String email);
}
