/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "findClassById", query = "SELECT u FROM Class u WHERE u.id =:id"),
    @NamedQuery(name = "findAllClasses", query = "SELECT c FROM Class c"),
    @NamedQuery(name = "findAllClassesByTeacherId", query = "SELECT cl FROM class cl " +
                                                            "	JOIN course co ON co.id_class=cl.id " +
                                                            "   JOIN teacher t ON t.id=co.id_teacher "+
                                                            "   WHERE t.id=:id_teacher "),
})
public class Class implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    private String name;
    private int schoolYear;
    
    @Enumerated(EnumType.STRING)
    private ClassLevel level;
    
    private int grade;
    /*
    @OneToMany
    List<Student> students;
*/
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(int schoolYear) {
        this.schoolYear = schoolYear;
    }

    public ClassLevel getLevel() {
        return level;
    }

    public void setLevel(ClassLevel level) {
        this.level = level;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    
}
