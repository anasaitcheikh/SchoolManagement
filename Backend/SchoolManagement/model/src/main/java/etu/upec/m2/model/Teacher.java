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
    @NamedQuery(name = "findTeacherByEmailAndPassword", query = "SELECT u FROM Teacher u WHERE u.email =:email AND u.password = :password"),
    @NamedQuery(name = "findAllTeacher", query = "SELECT t FROM Teacher t"),
    @NamedQuery(name = "findAllTeachersByClassId", query = "SELECT t FROM Teacher t LEFT JOIN Course co ON co.teacher.id = t.id WHERE co.classe.id=:id_class")
})
public class Teacher extends User{
    
    @Enumerated(EnumType.STRING)
    private TeacherSpecialty specialty;

    public TeacherSpecialty getSpecialty() {
        return specialty;
    }
    
    public Teacher() {
        this.status = UserStatus.TEACHER;
    }

    public void setSpecialty(TeacherSpecialty specialty) {
        this.specialty = specialty;
    }
}
