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
import etu.upec.m2.IHeadmasterService;
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
import etu.upec.m2.web.jwtannotation.JWTTokenRequired;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.time.LocalDateTime;
import java.util.Date;

@Path("headmaster")
@Produces(MediaType.APPLICATION_JSON)
@JWTTokenRequired
public class HeadmasterResource {
    @EJB
    IHeadmasterService headmasterService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createHeadmaster(Headmaster headmaster) {
        Long result_id = headmasterService.createHeadmaster(headmaster);
        return Response
                .status(Status.OK)
                .entity(result_id)
                .build();
    }

    @GET
    @Path("{id}")
    public Response getHeadmaster(Long id) {
        Headmaster headmaster = headmasterService.getHeadmasterById(id);
        return Response
                .status(Status.OK)
                .entity(headmaster)
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateHeadmaster(Long id,Headmaster headmaster) {
        Long result_id=headmasterService.updateHeadmaster(id, headmaster);
        return Response
                .status(Status.OK)
                .entity(result_id)
                .build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteHeadmaster(Long id) {
        Long resul_id=headmasterService.deleteHeadmaster(id);
        return Response
                .status(Status.OK)
                .entity(resul_id)
                .build();
    }
    
    private String generateToken(String login) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String jws = Jwts
                .builder()
                .setSubject(login)
                .setExpiration(new Date((LocalDateTime.now().getMinute() + 120) * 1000000))
                .signWith(key)
                .compact();
        return jws;
    }
}
