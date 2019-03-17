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
    @NamedQuery(name = "findHeadmasterById", query = "SELECT u FROM Headmaster u WHERE u.id =:id"),
    @NamedQuery(name = "findHeadByIdAndPassword", query = "SELECT u FROM Headmaster u WHERE u.id =:id AND u.password = :password"),
    @NamedQuery(name = "findHeadmasterByEmailAndPassword", query = "SELECT u FROM Headmaster u WHERE u.email =:email AND u.password = :password"),
})

public class Headmaster extends User{
    
}
