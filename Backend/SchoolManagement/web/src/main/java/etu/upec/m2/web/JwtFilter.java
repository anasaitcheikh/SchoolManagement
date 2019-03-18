/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web;

import etu.upec.m2.web.jwtannotation.JWTTokenRequired;
import java.io.IOException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.ext.Provider;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import javax.annotation.Priority;
import javax.ws.rs.core.Response;

/**
 *
 * @author hadji
 */

@Provider
@JWTTokenRequired
@Priority(Priorities.AUTHENTICATION)
public class JwtFilter implements ContainerRequestFilter{
            
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        Key key = JwtKeySingleton.getKey();
        
        try {
            String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
        
            String token = authorizationHeader.substring("Bearer".length()).trim();
            String res = Jwts.parser()
                .setSigningKey(key)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
            
            //if(!res.equals("headmaster")){
                //requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
            //}
        } catch (Exception e) {
            System.err.println("Exception "+e.getMessage());
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
        }
    }
    
}
