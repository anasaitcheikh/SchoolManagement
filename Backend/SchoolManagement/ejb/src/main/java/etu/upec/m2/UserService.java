/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.User;
import etu.upec.m2.model.UserStatus;
import etu.upec.utils.EncryptPassword;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
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
        try {
            String encryptPassword=EncryptPassword.encryptPassword(user.getPassword(),"SHA1");
            user.setPassword(encryptPassword);
            em.persist(user);
            return user.getId();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            return new Long(0);
        } 
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
        try{
            TypedQuery<User> query =  em.createNamedQuery("findUserById", User.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        try{
            TypedQuery<User> query =  em.createNamedQuery("findUserByEmailAndPassword", User.class);
            String encryptPassword=EncryptPassword.encryptPassword(password,"SHA1");
            System.out.println("etu.upec.m2.UserService.getUserByEmailAndPassword()=>"+encryptPassword);
            query.setParameter("email", email);
            query.setParameter("password", encryptPassword);
            
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
        User user;
        try{
            String encryptOldPassword=EncryptPassword.encryptPassword(oldPassword,"SHA1");
            TypedQuery<User> query =  em.createNamedQuery("findUserByIdAndPassword", User.class);
            query.setParameter("id", id);
            query.setParameter("password", encryptOldPassword);
            user = query.getSingleResult();
        }catch(NoResultException e){
            user= null;
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            user=null;
        }
        if(user == null) {
            return -1L;
        }
        
        try {
            String encryptPassword=EncryptPassword.encryptPassword(newPassword,"SHA1");
            user.setPassword(encryptPassword);
            em.merge(user);
            return user.getId();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            return -1L;
        }
    }
    
}
