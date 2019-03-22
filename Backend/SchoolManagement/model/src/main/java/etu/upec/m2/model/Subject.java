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
@NamedQueries({
    @NamedQuery(name = "findSubjectById", query = "SELECT u FROM Subject u WHERE u.id =:id"),
    @NamedQuery(name = "findAllSubject", query = "SELECT u FROM Subject u ")
})
public class Subject implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private SubjectName name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SubjectName getName() {
        return name;
    }

    public void setName(SubjectName name) {
        this.name = name;
    }
}
