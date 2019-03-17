/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Classroom;
import java.util.List;
import javax.ejb.Local;


/**
 *
 * @author ademo
 */
@Local
public interface IClassroomService {
     
    Long createClassroom(Classroom classroom);
    Long deleteClassroom(Long id);
    Long updateClassroom(Long id, Classroom classroom);
    List<Classroom> getAllClassroom();
    Classroom getClassroomById(Long id);
}
