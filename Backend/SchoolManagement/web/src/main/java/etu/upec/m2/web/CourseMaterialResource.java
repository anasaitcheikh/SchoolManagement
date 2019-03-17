/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.ICourseMaterialService;
import etu.upec.m2.model.CourseMaterial;
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

@Path("courseMaterial")
@Produces(MediaType.APPLICATION_JSON)
public class CourseMaterialResource {
    @EJB
    ICourseMaterialService courseMaterialService;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createCourseMaterial(CourseMaterial cm) {
        Long result_id = courseMaterialService.createCourseMaterial(cm);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @GET
    @Path("{id}")
    public Response getCourseMaterial(@PathParam("id")Long id) {
        CourseMaterial cm = courseMaterialService.getCourseMaterialById(id);
        return Response
                .status(Response.Status.OK)
                .entity(cm)
                .build();
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateCourseMaterial(@PathParam("id")Long id,CourseMaterial cm) {
        Long result_id=courseMaterialService.updateCourseMaterial(id, cm);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
    
    @DELETE
    @Path("{id}")
    public Response deleteCourseMaterial(@PathParam("id")Long id) {
        Long result_id=courseMaterialService.deleteCourseMaterial(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
}
