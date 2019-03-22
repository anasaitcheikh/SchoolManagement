/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IMessageService;
import etu.upec.m2.model.Message;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Nouhayla
 */
@Path("message")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
public class MessageResource {
    
    @EJB
    IMessageService messageService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createMessage(Message message) {
        Long result_id = messageService.createMessage(message);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    public Response getMessagesBySenderId(@Context HttpHeaders httpHeaders) {
        System.err.println("ID ===> " + httpHeaders.getRequestHeaders().getFirst("ID"));
        Long id = Long.parseLong(httpHeaders.getRequestHeaders().getFirst("ID"));
        
        List<Message> message = messageService.getMessagesBySenderId(id);
        return Response
                .status(Response.Status.OK)
                .entity(message)
                .build();
    }
    
    /*@GET
    public Response getMessagesBySenderIdOrRecipientId(@Context HttpHeaders httpHeaders) {
        System.err.println("ID ===> " + httpHeaders.getRequestHeaders().getFirst("ID"));
        Long id = Long.parseLong(httpHeaders.getRequestHeaders().getFirst("ID"));
        
        List<Message> message = messageService.getMessagesBySenderIdOrRecipientId(id);
        return Response
                .status(Response.Status.OK)
                .entity(message)
                .build();
    }*/
    
    @GET
    @Path("{id}")
    public Response getMessage(@PathParam("id")Long id) {
        Message message = messageService.getMessageById(id);
        return Response
                .status(Response.Status.OK)
                .entity(message)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteMessage(@PathParam("id")Long id) {
        Long result_id=messageService.deleteMessage(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    } 

}
