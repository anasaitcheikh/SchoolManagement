/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Nouhayla
 */
@Embeddable
public class MarkId implements Serializable{
    @Basic(optional = false)
    @NotNull
    @Column(name="studentId")
    private long studentId;
    @Basic(optional = false)
    @NotNull
    @Column(name="subjectId")
    private long subjectId;

    public MarkId(long studentId, long subjectId) {
        this.studentId = studentId;
        this.subjectId = subjectId;
    }

    public MarkId() {
    }

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(long subjectId) {
        this.subjectId = subjectId;
    }
    
}
