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
@NamedQueries({
    @NamedQuery(name = "findStudentById", query = "SELECT u FROM Student u WHERE u.id =:id"),
    @NamedQuery(name = "findStudentByIdAndPassword", query = "SELECT u FROM Student u WHERE u.id =:id AND u.password = :password"),
    @NamedQuery(name = "findStudentByEmailAndPassword", query = "SELECT u FROM Student u WHERE u.email =:email AND u.password = :password"),
    @NamedQuery(name = "findAllStudent", query = "SELECT s FROM Student s"),
    @NamedQuery(name = "findAllStudentsByClassId", query = "SELECT s FROM Student s WHERE s.studentClass.id=:id_class")
})
public class Student extends User{
    
    @ManyToOne(optional=true)
    @JoinColumn(name = "id_class")
    private Class studentClass;
    
    @OneToMany(mappedBy="student")
    private List<Mark> marks;
    
    public Student() {
        this.status = UserStatus.STUDENT;
    }

    public Class getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(Class studentClass) {
        this.studentClass = studentClass;
    }
}
