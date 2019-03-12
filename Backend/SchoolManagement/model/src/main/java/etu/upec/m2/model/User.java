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
<<<<<<< HEAD
@Table(
    uniqueConstraints = @UniqueConstraint(columnNames={"email"})
)
public abstract class User implements Serializable {
   
=======
@Table(uniqueConstraints = @UniqueConstraint(columnNames={"email"}))

@NamedQueries({
    @NamedQuery(name = "findUserById", query = "SELECT u FROM User u WHERE u.id =:id"),
    @NamedQuery(name = "findUserByIdAndPassword", query = "SELECT u FROM User u WHERE u.id =:id AND u.password = :password"),
})
public abstract class User implements Serializable {
>>>>>>> 9c49d45e34a8d954b7743135b6224771cd558173
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    protected Long id;
        
    @Enumerated(EnumType.STRING)
    protected UserStatus status;
    
<<<<<<< HEAD
    protected String email, password, lastname, firstname;
=======
    protected String email, lastname, firstname, password;
>>>>>>> 9c49d45e34a8d954b7743135b6224771cd558173
    
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

<<<<<<< HEAD
    public void setLastname(String lastname) {
        this.lastname = lastname;
=======
    public void setLastname(String Lastname) {
        this.lastname = Lastname;
>>>>>>> 9c49d45e34a8d954b7743135b6224771cd558173
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

<<<<<<< HEAD
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
=======
    public void setBirthDate(Date BirthDate) {
        this.birthDate = BirthDate;
>>>>>>> 9c49d45e34a8d954b7743135b6224771cd558173
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }
}
