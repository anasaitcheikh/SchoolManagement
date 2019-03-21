/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IStudentService;
import etu.upec.m2.model.Student;
import java.util.List;
import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import etu.upec.m2.web.annotations.Owner;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Nouhayla
 */
@Path("student")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
public class StudentResource {
        
    @EJB
    IStudentService studentService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response createStudent(Student student) {
        Long result_id = studentService.createStudent(student);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getStudent(@PathParam("id")Long id) {
        Student student = studentService.getStudentById(id);
        return Response
                .status(Response.Status.OK)
                .entity(student)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.STUDENT})
    @Owner
    public Response updateStudent(@PathParam("id")Long id,Student student) {
        Long result_id=studentService.updateStudent(id, student);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    public Response getAllStudents() {
        List<Student> staff = studentService.getAllStudent();
        return Response
                .status(Response.Status.OK)
                .entity(staff)
                .build();
    }
    
    @GET
    @Path("all/{id}")
    public Response getAllStudentsByClassId(@PathParam("id")Long id) {
        List<Student> students = studentService.getAllStudentsByClassId(id);
        return Response
                .status(Response.Status.OK)
                .entity(students)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response deleteStudent(@PathParam("id")Long id) {
        Long result_id=studentService.deleteStudent(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }

}
