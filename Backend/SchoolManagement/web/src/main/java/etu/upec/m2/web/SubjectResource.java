/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.ISubjectService;
import etu.upec.m2.model.Subject;
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
@Path("subject")
@Produces(MediaType.APPLICATION_JSON)
public class SubjectResource {
          
    @EJB
    ISubjectService subjectService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createSubject(Subject subject) {
        Long result_id = subjectService.createSubject(subject);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getSubject(@PathParam("id")Long id) {
        Subject subject = subjectService.getSubjectById(id);
        return Response
                .status(Response.Status.OK)
                .entity(subject)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateSubject(@PathParam("id")Long id,Subject subject) {
        Long result_id=subjectService.updateSubject(id, subject);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteSubject(@PathParam("id")Long id) {
        Long result_id=subjectService.deleteSubject(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }

}
