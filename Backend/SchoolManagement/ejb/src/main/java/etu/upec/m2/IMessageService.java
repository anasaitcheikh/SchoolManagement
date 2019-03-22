/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Message;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ademo
 */
@Local
public interface IMessageService {
     
    //dans les paramètres tu peux ajouter la class qui fais l'appel pour gérer les droit d'accès 
    Long createMessage(Message message);
    Long deleteMessage(Long id);
    List<Message> getMessagesBySenderIdOrRecipientId(Long senderId);
    List<Message> getMessagesBySenderId(Long senderId);
    Message getMessageById(Long id);
}
