/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "findTeacherById", query = "SELECT u FROM Teacher u WHERE u.id =:id"),
    @NamedQuery(name = "findTeacherByIdAndPassword", query = "SELECT u FROM Teacher u WHERE u.id =:id AND u.password = :password"),
})
public class Teacher extends User{
    
    @Enumerated(EnumType.STRING)
    private TeacherSpecialty specialty;

    public TeacherSpecialty getSpecialty() {
        return specialty;
    }

    public void setSpecialty(TeacherSpecialty specialty) {
        this.specialty = specialty;
    }
}
