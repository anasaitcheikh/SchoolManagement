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
@NamedQueries({
    @NamedQuery(name = "findCourseById", query = "SELECT u FROM Course u WHERE u.id =:id")
})
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @Temporal(TemporalType.TIME)
    private Date time;
    
    @Temporal(TemporalType.DATE)
    private Date date;
    
    @ManyToOne
    @JoinColumn(name = "id_class", referencedColumnName = "id")
    private Class classe;
    
    @ManyToOne
    @JoinColumn(name = "id_classroom", referencedColumnName = "id")
    private Classroom classroom;
    
    @ManyToOne
    @JoinColumn(name = "id_subject", referencedColumnName = "id")
    private Subject subject;
    
    @ManyToOne
    @JoinColumn(name = "id_teacher", referencedColumnName = "id")
    private Teacher teacher;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Class getClasse() {
        return classe;
    }

    public void setClasse(Class classe) {
        this.classe = classe;
    }

    public Classroom getClassroom() {
        return classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
    
}
