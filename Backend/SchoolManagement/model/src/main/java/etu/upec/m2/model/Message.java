/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

/**
 *
 * @author ademoub
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "findMessageById", query = "SELECT u FROM Message u WHERE u.id =:id")
})
public class Message implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    protected Long id;

    
    private String msg, object;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAndTime;
    
    @ManyToOne
    @JoinColumn(name = "id_sender", referencedColumnName = "id")
    private User sender;
    
    @ManyToOne
    @JoinColumn(name = "id_recipient", referencedColumnName = "id")
    private User recipient;



    public String getObject() {
        return object;
    }

    public void setObject(String object) {
        this.object = object;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
     public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
    
    public Date getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(Date dateAndTime) {
        this.dateAndTime = dateAndTime;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }
    
}
