/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IStaffService;
import etu.upec.m2.model.Staff;
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

@Path("staff")
@Produces(MediaType.APPLICATION_JSON)
@JwtTokenRequired
@AllowedRoles(roles = {UserStatus.HEADMASTER})
public class StaffResource {
    
    @EJB
    IStaffService staffService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createStaff(Staff staff) {
        Long result_id = staffService.createStaff(staff);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getStaff(@PathParam("id")Long id) {
        Staff staff = staffService.getStaffById(id);
        return Response
                .status(Response.Status.OK)
                .entity(staff)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateStaff(@PathParam("id")Long id,Staff staff ) {
        Long result_id=staffService.updateStaff(id, staff);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteStaff(@PathParam("id")Long id) {
        Long result_id=staffService.deleteStaff(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }

}
