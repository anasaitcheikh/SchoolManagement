/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IUserService;
import etu.upec.m2.model.User;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
                .entity("Wrong password")
                .build();
    }
}
