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
    
    public static String encryptPassword(String password, String methode) throws NoSuchAlgorithmException{
        MessageDigest md = MessageDigest.getInstance(methode);
        byte[] valBytes = password.getBytes();
        byte[] hashBytes = md.digest(valBytes);
        String passwordEncrypt=convertByteToString(hashBytes);
        return passwordEncrypt;
    }
    
    public static String convertByteToString(byte [] bytes){
        StringBuffer sb = new StringBuffer();
        System.err.print("bytes=>");
        for (int i = 0; i < bytes.length; i++) {
            System.err.print(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
        }
        System.err.println();
	return sb.toString(); 
    }  
}
