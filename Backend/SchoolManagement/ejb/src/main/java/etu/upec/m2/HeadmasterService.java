/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Headmaster;
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
public class HeadmasterService implements IHeadmasterService{

    private static Logger log = Logger.getLogger(HeadmasterService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createHeadmaster(Headmaster headmaster) {
        em.persist(headmaster);
        return headmaster.getId();
    }

    @Override
    public Long deleteHeadmaster(Long id) {
        em.remove(em.find(Headmaster.class, id));
        return id;
    }

    @Override
    public Long updateHeadmaster(Long id, Headmaster newHeadmaster) {
        Headmaster headmaster=getHeadmasterById(id);
        if(headmaster == null) {
            return new Long(0);
        }
          
        headmaster.setBirthDate(newHeadmaster.getBirthDate());
        headmaster.setEmail(newHeadmaster.getEmail());
        headmaster.setFirstname(newHeadmaster.getFirstname());
        headmaster.setLastname(newHeadmaster.getLastname());
        em.merge(newHeadmaster);
        return id;
    }

    @Override
    public List<Headmaster> getAllHeadmaster() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Headmaster getHeadmasterById(Long id) {
        try{
            TypedQuery<Headmaster> query =  em.createNamedQuery("findHeadmasterById", Headmaster.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }    
    }

    @Override
    public Long resetPassword(Long id, String oldPassword, String newPassword) {
//        Headmaster headmaster;
//        try{
//            TypedQuery<Headmaster> query =  em.createNamedQuery("findHeadmasterByIdAndPassword", Headmaster.class);
//            String encryptOldPassword=EncryptPassword.encryptPassword(oldPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptOldPassword);
//            query.setParameter("id", id);
//            query.setParameter("password", oldPassword);
//            headmaster = query.getSingleResult();
//        }catch(NoResultException e){
//            headmaster= null;
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(HeadmasterService.class.getName()).log(Level.SEVERE, null, ex);
//            headmaster=null;
//        }
//        if(headmaster == null) {
//            return -1L;
//        }
//        
//        try {
//            String encryptPassword=EncryptPassword.encryptPassword(newPassword,"SHA1");
//            System.out.println("resetPassword old=>"+encryptPassword);
//            headmaster.setPassword(encryptPassword);
//            em.merge(headmaster);
//            return headmaster.getId();
//        } catch (NoSuchAlgorithmException ex) {
//            Logger.getLogger(HeadmasterService.class.getName()).log(Level.SEVERE, null, ex);
//        }
        return -1L;
    }

    @Override
    public Headmaster getHeadmasterByEmailAndPassword(String email, String password) {
        try{
            TypedQuery<Headmaster> query =  em.createNamedQuery("findHeadmasterByEmailAndPassword", Headmaster.class);
            String encryptPassword=EncryptPassword.encryptPassword(password,"SHA1");
            System.out.println("etu.upec.m2.HeadmasterService.getHeadmasterByEmailAndPassword()=>"+encryptPassword);
            query.setParameter("email", email);
            query.setParameter("password", encryptPassword);
            
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(HeadmasterService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
}
