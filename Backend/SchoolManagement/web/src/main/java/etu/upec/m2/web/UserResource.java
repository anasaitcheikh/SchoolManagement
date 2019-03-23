/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IUserService;
import etu.upec.m2.model.User;
import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 *
 * @author hadji
 */
@Path("user")
@JwtTokenRequired
public class UserResource {

    @EJB
    IUserService userService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response resetPassword(User user) {
        Long id = userService.resetPassword(user.getId(), user.getOldPassword(), user.getPassword());
        
        if(id == user.getId()){
            return Response.status(Response.Status.OK)
                .entity(id)
                .build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity("Wrong password or NoSuchAlgorithmException")
                .build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllEmail(@Context UriInfo uriInfo){
        if(uriInfo.getQueryParameters().containsKey("status")) {
            String actor=uriInfo.getQueryParameters().getFirst("status");
            if(actor.contains("STUDENT"))
                return getAllEmailForStudent();
            if(actor.contains("TEACHER") || actor.contains("HEADMASTER"))
                return getAllEmailForHeadmasterAndTeacher();
        }
        return Response
                .status(Response.Status.NOT_FOUND)
                .build();
    }
    
    @AllowedRoles(roles = {UserStatus.STUDENT, UserStatus.TEACHER, UserStatus.HEADMASTER})
    public Response getAllEmailForStudent(){
        List<String> emails = userService.getAllEmailForStudent();
        
        return Response.status(Response.Status.OK)
            .entity(emails)
            .build();
    }
    
    @AllowedRoles(roles = {UserStatus.TEACHER,UserStatus.HEADMASTER})
    public Response getAllEmailForHeadmasterAndTeacher(){
        List<String> emails = userService.getAllEmailForHeadmasterAndTeacher();
        
        return Response.status(Response.Status.OK)
            .entity(emails)
            .build();
    }
    
}
