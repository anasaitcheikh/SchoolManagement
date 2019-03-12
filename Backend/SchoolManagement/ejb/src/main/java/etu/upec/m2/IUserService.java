/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.User;
import javax.ejb.Local;
/**
 *
 * @author hadji
 */
@Local
public interface IUserService {
    User getUser(Long id);
    int resetPassword(Long id, String oldPassword, String newPassword);
    User createUser(User user);
}
