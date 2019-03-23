/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.ICourseMaterialService;
import etu.upec.m2.model.CourseMaterial;
import etu.upec.m2.web.annotations.JwtTokenRequired;
import java.io.File;
import java.io.InputStream;
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
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response.ResponseBuilder;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

/**
 *
 * @author Nouhayla
 */
@Path("course-material")
@Produces(MediaType.APPLICATION_JSON)
//@JwtTokenRequired
public class CourseMaterialResource {

    @EJB
    ICourseMaterialService courseMaterialService;

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadCourseMaterial(MultipartFormDataInput multipartFormDataInput) {
        try {
            String description = multipartFormDataInput.getFormDataPart("description", String.class, null);
            System.err.println(description);

            String fileName = "";
            Map<String, List<InputPart>> formParts = multipartFormDataInput.getFormDataMap();

            List<InputPart> inPart = formParts.get("file"); // "file" should match the name attribute of your HTML file input 
            for (InputPart inputPart : inPart) {
                try {
                    // Retrieve headers, read the Content-Disposition header to obtain the original name of the file
                    MultivaluedMap<String, String> headers = inputPart.getHeaders();
                    String[] contentDispositionHeader = headers.getFirst("Content-Disposition").split(";");
                    for (String name : contentDispositionHeader) {
                        if ((name.trim().startsWith("filename"))) {
                            String[] tmp = name.split("=");
                            fileName = tmp[1].trim().replaceAll("\"", "");
                        }
                    }

                    // Handle the body of that part with an InputStream
                    InputStream inputStream = inputPart.getBody(InputStream.class, null);
                    Long id = this.courseMaterialService.createCourseMaterial(fileName, description, inputStream);
                    if(id > 0L){
                        return Response.status(200).entity(id).build();
                    }
                    else {
                        return Response.status(400).build();
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    return Response.status(400).build();
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(CourseMaterialResource.class.getName()).log(Level.SEVERE, null, ex);
            return Response.status(400).build();
        }

        return Response.status(Response.Status.OK).build();
    }

    @GET
    @Path("{id}")
    public Response downloadCourseMaterial(@PathParam("id") Long id) {
        File file = courseMaterialService.downloadCourseMaterial(id);
        if(file == null) {
            Response.status(Response.Status.NOT_FOUND).build();
        }
        ResponseBuilder response = Response.ok((Object) file);
        response.header("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");
        return response.build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllCourseMaterials() {
        List<CourseMaterial> cm = courseMaterialService.getAllCourseMaterial();
        return Response
                .status(Response.Status.OK)
                .entity(cm)
                .build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateCourseMaterial(@PathParam("id") Long id, CourseMaterial cm) {
        Long result_id = courseMaterialService.updateCourseMaterial(id, cm);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteCourseMaterial(@PathParam("id") Long id) {
        Long result_id = courseMaterialService.deleteCourseMaterial(id);
        return Response
                .status(Response.Status.OK)
                .entity(result_id)
                .build();
    }
}
