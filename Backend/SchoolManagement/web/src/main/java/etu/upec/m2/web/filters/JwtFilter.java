/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web.filters;

import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.utils.JwtKeySingleton;
import java.io.IOException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.ext.Provider;

import io.jsonwebtoken.Jwts;
import java.security.Key;
import javax.annotation.Priority;
import javax.ws.rs.core.Response;
import etu.upec.m2.web.annotations.JwtTokenRequired;

/**
 *
 * @author hadji
 */

@Provider
@JwtTokenRequired
@Priority(Priorities.AUTHENTICATION)
public class JwtFilter implements ContainerRequestFilter{
    private static final String ROLE_PROPERTY = "ROLE"; 
    private static final String ID_PROPERTY = "ID"; 
            
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        Key key = JwtKeySingleton.getKey();
        
        try {
            String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
        
            String token = authorizationHeader.substring("Bearer".length()).trim();
            String user = Jwts.parser()
                .setSigningKey(key)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
            
            System.err.println("user is " + user);
            
            String[] userInfos = user.split(",");
            
            requestContext.setProperty(ID_PROPERTY, Integer.parseInt(userInfos[0].split(":")[1]));
            requestContext.setProperty(ROLE_PROPERTY, UserStatus.valueOf(userInfos[1].split(":")[1]));
            
            
        } catch (Exception e) {
            System.err.println("Exception "+e.getMessage());
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
        }
    }
    
}
