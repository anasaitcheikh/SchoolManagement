/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.util.List;
import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
public class Class {
    
    @OneToMany
    List<Student> student;
    
}
