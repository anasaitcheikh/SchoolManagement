/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

/**
 *
 * @author hadji
 */
import etu.upec.m2.model.User;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import etu.upec.m2.IUserService;
import etu.upec.m2.model.Headmaster;

@Path("headmaster")
@Produces(MediaType.APPLICATION_JSON)
public class HeadmasterResource {

    @EJB
    IUserService userService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createHeadmaster(Headmaster user) {
        User u = this.userService.createUser(user);
        return Response
                .status(Status.OK)
                .entity(u)
                .build();
    }

    @GET
    @Path("{id}")
    public Response getHeadmaster(Long id) {
        User headmaster = this.userService.getUser(id);
        return Response
                .status(Status.OK)
                .entity(headmaster)
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateHeadmaster(Headmaster user) {
        User headmaster = this.userService.createUser(user);
        return Response
                .status(Status.OK)
                .entity(headmaster)
                .build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteHeadmaster(Long id) {
        User headmaster = this.userService.getUser(id);
        return Response
                .status(Status.OK)
                .entity(headmaster)
                .build();
    }
}
