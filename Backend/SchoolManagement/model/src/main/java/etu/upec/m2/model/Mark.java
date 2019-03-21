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
    @NamedQuery(name = "findAllMarkByIdStudent", query = "SELECT u, s FROM Mark u LEFT JOIN u.subject s ON u.id.subjectId = s.id WHERE u.id.studentId =:studentId"),
    @NamedQuery(name = "findAllMarkBySujectIdAndClassId", query = "SELECT u FROM Mark u LEFT JOIN u.subject s ON u.id.subjectId = s.id LEFT JOIN u.student e ON u.id.studentId = e.id WHERE e.studentClass.id =:classId and s.id =:subjectId"),
})
public class Mark implements Serializable {
    @EmbeddedId 
    private MarkId id;
    
    private double mark;
    
    
    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "id_student")
    private Student student;
    
    @ManyToOne
    @MapsId("subjectId")
    @JoinColumn(name = "id_subject")
    private Subject subject;

    public MarkId getId() {
        return id;
    }

    public void setId(MarkId id) {
        this.id = id;
    }

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

    public double getMark() {
        return mark;
    }

    public void setMark(double mark) {
        this.mark = mark;
    }    
    
}
