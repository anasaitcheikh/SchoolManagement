/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.IHeadmasterService;
import etu.upec.m2.IStudentService;
import etu.upec.m2.ITeacherService;
import etu.upec.m2.model.Headmaster;
import etu.upec.m2.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.time.LocalDateTime;
import java.util.Date;
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
@Path("login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginResource {

    @EJB
    IHeadmasterService headmasterService;

    @EJB
    ITeacherService teacherService;

    @EJB
    IStudentService studentService;

    @POST
    public Response login(Headmaster headmaster) {
        User user = headmasterService.getHeadmasterByEmailAndPassword(headmaster.getEmail(), headmaster.getPassword());

        /*if (user == null) {
            user = teacherService.getTeacherByEmailAndPassword(email, password);
        }

        if (user == null) {
            user = studentService.getStudentByEmailAndPassword(email, password);

            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(user)
                    .build();
        }*/
        
        if (user == null) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(user)
                    .build();
        }
        
        return Response
                .status(Response.Status.OK)
                .entity(generateToken(user))
                .build();
    }
    
    private String generateToken(User user) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String jws = Jwts
                .builder()
                .setSubject(user.getEmail())
                .setExpiration(new Date((LocalDateTime.now().getMinute() + 120) * 1000000))
                .signWith(key)
                .compact();
        return jws;
    }
}
