/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2.web.utils;

import etu.upec.m2.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.time.LocalDateTime;
import java.util.Date;

/**
 *
 * @author hadji
 */


public class JwtKeySingleton {
    public static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); 
    
    public static Key getKey() {
        return key;
    }
}
