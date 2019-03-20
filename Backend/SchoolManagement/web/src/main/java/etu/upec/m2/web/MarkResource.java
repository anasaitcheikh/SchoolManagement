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
        MarkId result_id = markService.createMark(mark);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{idSudent}/{idSubject}")
    public Response getMark(@PathParam("idSudent")Long idStudent,@PathParam("idSubject")Long idSubject ) {
        MarkId id = new MarkId();
        id.setStudentId(idStudent);
        id.setSubjectId(idSubject);
        Mark mark = markService.getMarkById(id);
        return Response
                .status(Response.Status.OK)
                .entity(mark)
                .build();
    }
    
    @GET
    @Path("{idSudent}")
    @AllowedRoles(roles = {UserStatus.HEADMASTER, UserStatus.STUDENT})
    public Response getAllMarkByIdStudent(@PathParam("idSudent")Long idStudent) {
        List<Object[]> marks = markService.getAllMarkByIdStudent(idStudent);
        return Response 
                .status(Response.Status.OK)
                .entity(marks)
                .build();
    }
    /*
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateMark(@PathParam("id")MarkId id,Mark mark) {
        MarkId result_id=markService.updateMark(id, mark);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteMark(@PathParam("id")MarkId id) {
        MarkId result_id=markService.deleteMark(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
*/
}
