/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web.filters;

import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.AllowedRoles;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author hadji
 */
@Provider
@AllowedRoles
@Priority(Priorities.AUTHORIZATION)
public class RoleFilter implements ContainerRequestFilter{
    private static final String ROLE_PROPERTY = "ROLE"; 
    
    @Context
    ResourceInfo resourceInfo;
            
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        UserStatus currentRole = (UserStatus) requestContext.getProperty(ROLE_PROPERTY); 
        
        Class<?> resourceClass = resourceInfo.getResourceClass();
        AllowedRoles allowedRoles = resourceClass.getAnnotation(AllowedRoles.class);
        
        if (allowedRoles == null) {
          requestContext.abortWith(Response.status(Response.Status.INTERNAL_SERVER_ERROR).build());
        }
        
        UserStatus[] roles = allowedRoles.roles();
        
        ArrayList<UserStatus> rolesList = new ArrayList<>(Arrays.asList(roles));
        if(!rolesList.contains(currentRole)){
            requestContext.abortWith(Response.status(Response.Status.FORBIDDEN).build());
        }
    }   
}
