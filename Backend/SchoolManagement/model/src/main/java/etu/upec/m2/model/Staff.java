/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
<<<<<<< HEAD
public class Staff implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    private String firstname, lastname;
    
    @Enumerated(EnumType.STRING)
    private StaffRole role;
    
    private double salary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public StaffRole getStatus() {
        return role;
    }

    public void setStatus(StaffRole role) {
        this.role = role;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
    
=======
public class Staff {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id;
>>>>>>> 9c49d45e34a8d954b7743135b6224771cd558173
    
}
