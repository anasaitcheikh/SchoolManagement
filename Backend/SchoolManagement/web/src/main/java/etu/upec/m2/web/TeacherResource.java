/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.ITeacherService;
import etu.upec.m2.model.Teacher;
import java.util.List;
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

@Path("teacher")
@Produces(MediaType.APPLICATION_JSON)
public class TeacherResource {
    
    @EJB
    ITeacherService teacherService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createTeacher(Teacher teacher) {
        Long result_id = teacherService.createTeacher(teacher);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getTeacher(@PathParam("id")Long id) {
        Teacher teacher = teacherService.getTeacherById(id);
        return Response
                .status(Response.Status.OK)
                .entity(teacher)
                .build();
    }
    
    @GET
    @Path("all")
    public Response getAllStaff() {
        List<Teacher> teacher = teacherService.getAllTeacher();
        return Response
                .status(Response.Status.OK)
                .entity(teacher)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateTeacher(@PathParam("id")Long id,Teacher teacher) {
        Long result_id=teacherService.updateTeacher(id, teacher);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteTeacher(@PathParam("id")Long id) {
        Long result_id=teacherService.deleteTeacher(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }

}
