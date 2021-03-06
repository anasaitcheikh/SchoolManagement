/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.web.utils.JwtKeySingleton;
import etu.upec.m2.IHeadmasterService;
import etu.upec.m2.IStudentService;
import etu.upec.m2.ITeacherService;
import etu.upec.m2.IUserService;
import etu.upec.m2.model.Headmaster;
import etu.upec.m2.model.User;
import io.jsonwebtoken.Jwts;
import java.security.Key;
import java.util.Calendar;
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
    IUserService userService;
    
    @POST
    public Response login(Headmaster headmaster) {
        String email = headmaster.getEmail();
        String password = headmaster.getPassword();
        
        User user = userService.getUserByEmailAndPassword(email, password);
        
        if (user == null) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(user)
                    .build();
        }
        String userJson = "{\"id\": " + user.getId() + ", \"email\": \"" + user.getEmail() + "\", \"firstname\": \"" + user.getFirstname() + "\", \"lastname\": \"" + user.getLastname() + "\", \"status\": \"" + user.getStatus().toString() + "\", \"birthDate\": \"" + user.getBirthDate().toString()+ "\"}";
        return Response
                .status(Response.Status.OK)
                .entity("{\"token\": \"" + generateToken(user) + "\", \"user\": " + userJson + "}")
                .build();
    }
    
    private String generateToken(User user) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 2);
        
        Key key = JwtKeySingleton.getKey();
        String jws = Jwts
                .builder()
                .setSubject("id:" + user.getId() + ",status:" +  user.getStatus().toString())
                .setExpiration(new Date(calendar.getTimeInMillis()))
                .signWith(key)
                .compact();
        return jws;
    }
}
