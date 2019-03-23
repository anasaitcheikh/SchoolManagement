/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 *
 * @author ademo
 */
public class EncryptPassword {
    
    static String encryptPassword(String password, String methode) throws NoSuchAlgorithmException{
        MessageDigest md = MessageDigest.getInstance(methode);
		
        byte[] valBytes = password.getBytes();
        byte[] hashBytes = md.digest(valBytes);

        String passwordEncrypt=convertByteToString(hashBytes);
        return passwordEncrypt;
    }
    
    static String convertByteToString(byte [] bytes){// regarde cela
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < bytes.length; i++) {
            sb.append(bytes[i]);
        }
	return sb.toString(); 
    }  
}
