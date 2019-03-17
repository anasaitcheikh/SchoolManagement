/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.User;
import etu.upec.m2.model.UserStatus;
import java.util.List;
import java.util.logging.Logger;
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
 * @author ademo
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class UserService implements IUserService{

    private static Logger log = Logger.getLogger(UserService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createUser(User user) {
        em.persist(user);
        return user.getId();
    }

    @Override
    public Long deleteUser(Long id) {
        em.remove(em.find(User.class, id));
        return id;
    }

    @Override
    public Long updateUser(Long id, User newUser) {
        User user=getUserById(id);
        if(user == null) {
            return new Long(0);
        }
        user.setBirthDate(newUser.getBirthDate());
        user.setEmail(newUser.getEmail());
        user.setFirstname(newUser.getFirstname());
        user.setLastname(newUser.getLastname());
        user.setStatus(newUser.getStatus());
        em.merge(user);
        return user.getId();
    }

    @Override
    public List<User> getAllUser() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public User getUserById(Long id) {
        TypedQuery<User> query =  em.createNamedQuery("findUserById", User.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
        TypedQuery<User> query =  em.createNamedQuery("findUserByIdAndPassword", User.class);
        query.setParameter("id", id);
        query.setParameter("password", oldPassword);
        User user = query.getSingleResult();
        
        if(user == null) {
            return new Long(0);
        }
        
        user.setPassword(newPassword);
        em.merge(user);
        return user.getId();
    }
    
}
