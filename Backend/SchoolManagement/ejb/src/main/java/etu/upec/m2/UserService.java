/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Headmaster;
import etu.upec.m2.model.User;
import java.util.Date;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author hadji
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class UserService implements IUserService{
    @PersistenceContext
    EntityManager em;

    @Override
    public User getUser(Long id) {
        TypedQuery<User> query =  em.createNamedQuery("findUserById", User.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public int resetPassword(Long id, String oldPassword, String newPassword) {
        TypedQuery<User> query =  em.createNamedQuery("findUserByIdAndPassword", User.class);
        query.setParameter("id", id);
        query.setParameter("password", oldPassword);
        User user = query.getSingleResult();
        
        if(user == null) {
            return 0;
        }
        
        user.setPassword(newPassword);
        em.merge(user);
        return 0;
    }
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public User createUser(User user) {
        // TODO encrypt password
        em.persist(user);
        return user;
    }
}
