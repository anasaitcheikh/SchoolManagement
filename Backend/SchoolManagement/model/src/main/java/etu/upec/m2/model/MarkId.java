/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import javax.persistence.Embeddable;

/**
 *
 * @author Nouhayla
 */
@Embeddable
public class MarkId implements Serializable{
    long studentId;
    long subjectId;
}
