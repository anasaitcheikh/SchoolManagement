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
    @NamedQuery(name = "findMarkById", query = "SELECT u FROM Mark u WHERE u.id =:id"),
    @NamedQuery(name = "findAllMarkByIdStudent", query = "SELECT u FROM Mark u WHERE u.studentId =:studentId")
})
public class Mark implements Serializable {
    @EmbeddedId 
    private MarkId id;
    
    private double mark;
    
    /*
    @ManyToOne
    @JoinColumn(name = "id_student", referencedColumnName = "id")
    private Student student;
    
    @ManyToOne
    @JoinColumn(name = "id_subject", referencedColumnName = "id")
    private Subject subject;
*/
    public MarkId getId() {
        return id;
    }

    public void setId(MarkId id) {
        this.id = id;
    }
/*
    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
*/
    public double getMark() {
        return mark;
    }

    public void setMark(double mark) {
        this.mark = mark;
    }    
    
}
