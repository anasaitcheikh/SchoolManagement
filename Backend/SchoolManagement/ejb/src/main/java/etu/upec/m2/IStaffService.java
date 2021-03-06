/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Staff;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IStaffService { 
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createStaff(Staff staff);
    Long deleteStaff(Long id);
    Long updateStaff(Long id, Staff newStaff);
    List<Staff> getAllStaff();
    Staff getStaffById(Long id);
}
