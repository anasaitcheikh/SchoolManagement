/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames={"email"}))
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NamedQueries({
    @NamedQuery(name = "findUserById", query = "SELECT u FROM User u WHERE u.id =:id"),
    @NamedQuery(name = "findUserByIdAndPassword", query = "SELECT u FROM User u WHERE u.id =:id AND u.password = :password"),
})
public abstract class User implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    protected Long id;
        
    @Enumerated(EnumType.STRING)
    protected UserStatus status;
    
    protected String email, password, lastname, firstname;
    
    @Temporal(TemporalType.DATE)
    protected Date birthDate; 
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastname() {
        return lastname;
    }


    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirthDate() {
        return birthDate;
    }


    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }
}
