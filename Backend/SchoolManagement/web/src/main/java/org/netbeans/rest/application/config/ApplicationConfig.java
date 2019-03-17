/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.netbeans.rest.application.config;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author hadji
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(etu.upec.m2.web.ClassResource.class);
        resources.add(etu.upec.m2.web.ClassroomResource.class);
        resources.add(etu.upec.m2.web.CorsFilter.class);
        resources.add(etu.upec.m2.web.CourseMaterialResource.class);
        resources.add(etu.upec.m2.web.CourseResource.class);
        resources.add(etu.upec.m2.web.HeadmasterResource.class);
        resources.add(etu.upec.m2.web.JwtFilter.class);
        resources.add(etu.upec.m2.web.LoginResource.class);
        resources.add(etu.upec.m2.web.MarkResource.class);
        resources.add(etu.upec.m2.web.MessageResource.class);
        resources.add(etu.upec.m2.web.StaffResource.class);
        resources.add(etu.upec.m2.web.StudentResource.class);
        resources.add(etu.upec.m2.web.SubjectResource.class);
        resources.add(etu.upec.m2.web.TeacherResource.class);
    }
    
}
