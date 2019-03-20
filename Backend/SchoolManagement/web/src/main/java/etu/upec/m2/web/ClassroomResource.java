/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IClassroomService;
import etu.upec.m2.model.Classroom;
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

@Path("classroom")
@Produces(MediaType.APPLICATION_JSON)
public class ClassroomResource {
    @EJB
    IClassroomService classroomService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createClassroom(Classroom classroom) {
        Long result_id = classroomService.createClassroom(classroom);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getClassroom(@PathParam("id")Long id) {
        Classroom classroom = classroomService.getClassroomById(id);
        return Response
                .status(Response.Status.OK)
                .entity(classroom)
                .build();
    }
    
    @GET
    @Path("all")
    public Response getAllStaff() {
        List<Classroom> classrooms = classroomService.getAllClassroom();
        return Response
                .status(Response.Status.OK)
                .entity(classrooms)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateClassroom(@PathParam("id")Long id,Classroom classroom) {
        Long result_id=classroomService.updateClassroom(id, classroom);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteClassroom(@PathParam("id")Long id) {
        Long result_id=classroomService.deleteClassroom(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
}
