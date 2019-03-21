/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IClassService;
import etu.upec.m2.model.Class;
import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import etu.upec.m2.web.annotations.JwtTokenRequired;
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
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 *
 * @author Nouhayla
 */

@Path("class")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
public class ClassResource {
    @EJB
    IClassService classService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response createClass(Class c) {
        Long result_id = classService.createClass(c);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getClass(@PathParam("id")Long id) {
        Class c = classService.getClassById(id);
        return Response
                .status(Response.Status.OK)
                .entity(c)
                .build();
    }
    
    
    public Response getAllClases() {
        List<Class> classes = classService.getAllClasses();
        return Response
                .status(Response.Status.OK)
                .entity(classes)
                .build();
    }
    
    
    @AllowedRoles(roles = {UserStatus.HEADMASTER,UserStatus.TEACHER})
    public Response getAllClassByTeacherId(Long idTeacher) {
        List<Class> classes = classService.getAllClassByTeacherId(idTeacher);
        return Response
                .status(Response.Status.OK)
                .entity(classes)
                .build();
    }
    
    @GET
    public Response getClasses(@Context UriInfo uriInfo){
        if(uriInfo.getQueryParameters().containsKey("teacherId")) {
            Long teacherId = Long.parseLong(uriInfo.getQueryParameters().getFirst("teacherId"));
            return getAllClassByTeacherId(teacherId);
        }else{
            return getAllClases();
        }
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response updateClass(@PathParam("id")Long id,Class c) {
        Long result_id=classService.updateClass(id, c);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response deleteClass(@PathParam("id")Long id) {
        Long result_id=classService.deleteClass(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
}
