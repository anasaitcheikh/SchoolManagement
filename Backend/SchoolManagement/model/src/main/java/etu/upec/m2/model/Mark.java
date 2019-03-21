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
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"id_student", "id_subject"})})
@NamedQueries({
    @NamedQuery(name = "findMarkById", query = "SELECT u FROM Mark u WHERE u.id =:id"),
    @NamedQuery(name = "findAllMarkByIdStudent", query = "SELECT u, s FROM Mark u LEFT JOIN u.subject s ON u.markId.subjectId = s.id WHERE u.student.id =:studentId"),
    @NamedQuery(name = "findAllMarkBySujectIdAndClassId", query = "SELECT u FROM Mark u LEFT JOIN u.subject s ON u.markId.subjectId = s.id LEFT JOIN u.student e ON u.markId.studentId = e.id WHERE e.studentClass.id =:classId and s.id =:subjectId"),
})

public class Mark implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id;
    
    @EmbeddedId
    private MarkId markId;
    
    private double mark;
    
    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "id_student")
    private Student student;
    
    @ManyToOne
    @MapsId("subjectId")
    @JoinColumn(name = "id_subject")
    private Subject subject;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
    
    public MarkId getMarkId() {
        return markId;
    }

    public void setMarkId(MarkId markId) {
        this.markId = markId;
    }
    
}
