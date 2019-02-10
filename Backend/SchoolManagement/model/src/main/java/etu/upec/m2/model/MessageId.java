/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.model;

import java.io.Serializable;
import java.util.Objects;

/**
 *
 * @author Fadwa
 */
public class MessageId implements Serializable{

    Long senderId;
    Long receiverId;
    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 37 * hash + Objects.hashCode(this.senderId);
        hash = 37 * hash + Objects.hashCode(this.receiverId);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final MessageId other = (MessageId) obj;
        if (!Objects.equals(this.senderId, other.senderId)) {
            return false;
        }
        if (!Objects.equals(this.receiverId, other.receiverId)) {
            return false;
        }
        return true;
    }
    
}
