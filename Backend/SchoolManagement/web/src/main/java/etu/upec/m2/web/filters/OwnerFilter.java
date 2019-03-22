/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web.filters;

import etu.upec.m2.model.UserStatus;
import etu.upec.m2.web.annotations.Owner;
import java.io.IOException;
import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author hadji
 */
@Provider
@Priority(Priorities.HEADER_DECORATOR)
@Owner
public class OwnerFilter implements ContainerResponseFilter {

   @Override
   public void filter(final ContainerRequestContext requestContext,
                      final ContainerResponseContext cres) throws IOException {
       System.out.println("etu.upec.m2.web.filters.OwnerFilter.filter()"+requestContext.getProperty("ID"));
       int currentUserId = Integer.parseInt((String) requestContext.getProperty("ID"));
       UserStatus currentUserStatus = UserStatus.valueOf((String) requestContext.getProperty("ROLE"));
       MultivaluedMap<String, String> queryParams = requestContext.getUriInfo().getPathParameters();
       int pathUserId = Integer.parseInt((String)queryParams.getFirst("id"));
       
       
       if(currentUserId != pathUserId && currentUserStatus != UserStatus.HEADMASTER){
           requestContext.abortWith(Response.status(Response.Status.FORBIDDEN).build());
       }
       
   }
}
