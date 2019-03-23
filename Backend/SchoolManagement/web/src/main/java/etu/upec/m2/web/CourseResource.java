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
    
    public Response getAllCoursesByClassId(Long idClass) {
        List<Course> courses = courseService.getAllCoursesByClassId(idClass);

                
        if (courses.isEmpty()) {
            return Response
                    .status(Response.Status.OK)
                    .entity(courses)
                    .build();
        }
                
        String responseJson = "[";
        for(Course course:courses){
            
             responseJson =  responseJson + "{\"id\": " 
                + course.getId()+ ",\"time\": \""
                + course.getTime()+ "\",\"date\": \""
                + course.getDate().toString()+ "\",\"teacher\": {\"lastname\" : \""
                + course.getTeacher().getLastname()+ "\" }"+",\"classroom\": {\"roomNumber\" : "
                + course.getClassroom().getRoomNumber() + " }"+",\"subject\": {\"name\" : \""
                + course.getSubject().getName()+"\" }"+"},";
        }
        
        responseJson =  responseJson.substring(0,  responseJson.length()-1) + "]";
        return Response
                .status(Response.Status.OK)
                .entity(responseJson)
                .build();
    }
    
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.TEACHER})
    public Response getAllCoursesByTeacherId(Long idTeacher) {
        List<Course> courses = courseService.getAllCoursesByTeacherId(idTeacher);
        
        if (courses.isEmpty()) {
            return Response
                    .status(Response.Status.OK)
                    .entity(courses)
                    .build();
        }
                
        String responseJson = "[";
        for(Course course:courses){
            
             responseJson =  responseJson + "{\"id\": " 
                + course.getId()+ ",\"time\": \""
                + course.getTime()+ "\",\"status\": \""
                + course.isStatus()+ "\",\"date\": \""
                + course.getDate().toString()+ "\",\"class\": {\"name\" : \""
                + course.getClasse().getName()+ "\" }"+",\"classroom\": {\"roomNumber\" : "
                + course.getClassroom().getRoomNumber() + " }"+",\"subject\": {\"name\" : \""
                + course.getSubject().getName()+"\" }"+"},";
        }
        
        responseJson =  responseJson.substring(0,  responseJson.length()-1) + "]";
        return Response
                .status(Response.Status.OK)
                .entity(responseJson)
                .build();
    }
    
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.STUDENT})
    public Response getAllCoursesByStudentId(Long idStudent) {
        List<Course> courses = courseService.getAllCoursesByStudentId(idStudent);
        
        if (courses.isEmpty()) {
            return Response
                    .status(Response.Status.OK)
                    .entity(courses)
                    .build();
        }
                
        String responseJson = "[";
        for(Course course:courses){
            
             responseJson =  responseJson + "{\"id\": " 
                + course.getId()+ ",\"time\": \""
                + course.getTime()+ "\",\"date\": \""
                + course.getDate().toString()+ "\",\"teacher\": {\"lastname\" : \""
                + course.getTeacher().getLastname()+ "\" }"+",\"classroom\": {\"roomNumber\" : "
                + course.getClassroom().getRoomNumber() + " }"+",\"subject\": {\"name\" : \""
                + course.getSubject().getName()+"\" }"+"},";
        }
        
        responseJson =  responseJson.substring(0,  responseJson.length()-1) + "]";
        return Response
                .status(Response.Status.OK)
                .entity(responseJson)
                .build();
    }
    
    @AllowedRoles(roles = {UserStatus.HEADMASTER})
    public Response getAllCoursesByStatus(boolean status) {
        List<Course> courses = courseService.getAllCoursesByStatus(status);

        
        if (courses.isEmpty()) {
            return Response
                    .status(Response.Status.OK)
                    .entity(courses)
                    .build();
        }
                
        String responseJson = "[";
        for(Course course:courses){
            
             responseJson =  responseJson + "{\"id\": " 
                + course.getId()+ ",\"time\": \""
                + course.getTime()+ "\",\"date\": \""
                + course.getDate().toString()+ "\",\"teacher\": {\"lastname\" : \""
                + course.getTeacher().getLastname()+ "\",\"firstname\": \""
                + course.getTeacher().getFirstname()+ "\",\"email\": \""
                + course.getTeacher().getEmail()+ "\" }"+",\"classroom\": {\"roomNumber\" : "
                + course.getClassroom().getRoomNumber() + ",\"capacity\": "
                + course.getClassroom().getCapacity()+ " }"+",\"subject\": {\"name\" : \""
                + course.getSubject().getName()+"\" }"+ ",\"class\": {\"name\" : \""
                + course.getClasse().getName()+ "\",\"grade\": "
                + course.getClasse().getGrade()+",\"level\": \""
                + course.getClasse().getLevel()+"\" }"+"},";
        }
        
        responseJson =  responseJson.substring(0,  responseJson.length()-1) + "]";
        return Response
                .status(Response.Status.OK)
                .entity(responseJson)
                .build();
    }

    public Response getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return Response
                .status(Response.Status.OK)
                .entity(courses)
                .build();
    }
    
    @GET
    public Response getCourses(@Context UriInfo uriInfo){
        if(uriInfo.getQueryParameters().containsKey("classId")) {
            Long classId = Long.parseLong(uriInfo.getQueryParameters().getFirst("classId"));
            return getAllCoursesByClassId(classId);
        }
        else if(uriInfo.getQueryParameters().containsKey("teacherId")){
            Long teacherId = Long.parseLong(uriInfo.getQueryParameters().getFirst("teacherId"));
            return getAllCoursesByTeacherId(teacherId);
        }else if(uriInfo.getQueryParameters().containsKey("studentId")){
            Long studentId = Long.parseLong(uriInfo.getQueryParameters().getFirst("studentId"));
            return getAllCoursesByStudentId(studentId);
        }if(uriInfo.getQueryParameters().containsKey("status")){
            boolean status = Boolean.valueOf(uriInfo.getQueryParameters().getFirst("status"));
            return getAllCoursesByStatus(status);
        }else{
            return getAllCourses();
        }
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
