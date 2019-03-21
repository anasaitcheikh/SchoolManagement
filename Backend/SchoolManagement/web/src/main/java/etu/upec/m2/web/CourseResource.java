/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.ICourseService;
import etu.upec.m2.model.Course;
import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import etu.upec.m2.web.annotations.JwtTokenRequired;
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

@Path("course")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
public class CourseResource {
    @EJB
    ICourseService courseService; 
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.TEACHER})
    public Response createCourse(Course course) {
        Long result_id = courseService.createCourse(course);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getCourse(@PathParam("id")Long id) {
        Course course = courseService.getCourseById(id);
        return Response
                .status(Response.Status.OK)
                .entity(course)
                .build();
    }
    
//    @GET
//    @Path("{id}")
    public Response getCoursesByClassId(@PathParam("id")Long id) {
        Course course = courseService.getCourseById(id);
        return Response
                .status(Response.Status.OK)
                .entity(course)
                .build();
    }
    
//    @GET
//    @Path("{id}")
    public Response getCoursesByTeacherId(@PathParam("id")Long id) {
        Course course = courseService.getCourseById(id);
        return Response
                .status(Response.Status.OK)
                .entity(course)
                .build();
    }
    
//    @GET
//    @Path("{id}")
    public Response getCoursesByStatus(@PathParam("id")Long id) {
        Course course = courseService.getCourseById(id);
        return Response
                .status(Response.Status.OK)
                .entity(course)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response updateCourse(@PathParam("id")Long id,Course course) {
        Long result_id=courseService.updateCourse(id, course);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response deleteCourse(@PathParam("id")Long id) {
        Long resul_id=courseService.deleteCourse(id);
        return Response
                .status(Response.Status.OK)
                .entity(resul_id)
                .build();
    }
}
