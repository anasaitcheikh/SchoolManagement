/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Message;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;

/**
 *
 * @author ademo
 */
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class MessageService implements IMessageService {

    private static Logger log = Logger.getLogger(MessageService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createMessage(Message message) {
        em.persist(message);
        return message.getId();
    }

    @Override
    public Long deleteMessage(Long id) {
        em.remove(em.find(Message.class, id));
        return id;
    }

    @Override
    public Long updateMessage(Long id, Message newMessage) {
        Message message=getMessageById(id);
        if(message == null) {
            return new Long(0);
        }
        
        message.setDateAndTime(newMessage.getDateAndTime());
        message.setMsg(newMessage.getMsg());
        message.setObject(newMessage.getObject());
        message.setRecipient(newMessage.getRecipient());
        message.setSender(newMessage.getSender());
        em.merge(message);
        return message.getId();
    }

    @Override
    public List<Message> getMessagesBySenderId(Long senderId) {
        try{
            TypedQuery<Message> query =  em.createNamedQuery("findMessageBySenderId", Message.class);
            query.setParameter("senderId", senderId);
            return query.getResultList();
        }catch(NoResultException e){
            return new ArrayList<>();
        }
    }

    @Override
    public Message getMessageById(Long id) {
        try{
            TypedQuery<Message> query =  em.createNamedQuery("findMessageById", Message.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
}
