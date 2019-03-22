/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


package etu.upec.m2.web;

import etu.upec.m2.IMarkService;
import etu.upec.m2.model.Mark;
import etu.upec.m2.model.MarkId;
import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import etu.upec.m2.web.annotations.Owner;
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
@Path("mark")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
public class MarkResource {
    
    @EJB
    IMarkService markService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.TEACHER})
    public Response createMark(Mark mark) {
        Long result_id = markService.createMark(mark);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    public Response getMarks(@Context UriInfo uriInfo){
        if(uriInfo.getQueryParameters().containsKey("subjectId") && uriInfo.getQueryParameters().containsKey("classId")) {
            Long subjectId = Long.parseLong(uriInfo.getQueryParameters().getFirst("subjectId"));
            Long classId = Long.parseLong(uriInfo.getQueryParameters().getFirst("classId"));
            
            return getAllMarksBySubjectIdAndClassId(subjectId, classId);
        }
        else if(uriInfo.getQueryParameters().containsKey("studentId")){
            Long studentId = Long.parseLong(uriInfo.getQueryParameters().getFirst("studentId"));
            
            return getAllMarkByStudentId(studentId);
        }
        
        return Response
                .status(Response.Status.NOT_FOUND)
                .build();
    }
    
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.TEACHER})
    private Response getAllMarksBySubjectIdAndClassId(Long subjectId, Long classId) {
        List<Object[]> marks = markService.getAllMarkBySubjectIdAndClassId(subjectId, classId);
        return Response 
                .status(Response.Status.OK)
                .entity(marks)
                .build();
    }
 
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.STUDENT})
    @Owner
    private Response getAllMarkByStudentId(Long idStudent) {
        List<Mark> marks = markService.getAllMarkByIdStudent(idStudent);
        
        String responseJson = "[";
        for(Mark mark:marks){
            
             responseJson =  responseJson + "{\"id\": " + mark.getId()+ ",\"mark\": \""
                + mark.getMark()+ "\",\"subject\": {\"name\" : \""
                + mark.getSubject().getName()+ "\" }},";
        }
        responseJson =  responseJson.substring(0,  responseJson.length()-1) + "]";
        return Response
                .status(Response.Status.OK)
                .entity(responseJson)
                .build();
    }
    
    
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @AllowedRoles(roles = {UserStatus.TEACHER})
    public Response updateMark(@PathParam("id")Long id, Mark mark) {
        Long result_id = markService.updateMark(id, mark);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    @AllowedRoles(roles = {UserStatus.TEACHER})
    public Response deleteMark(@PathParam("id")Long id) {
        Long result_id=markService.deleteMark(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
}
