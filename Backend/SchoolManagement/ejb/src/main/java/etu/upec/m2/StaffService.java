/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package etu.upec.m2;

import etu.upec.m2.model.Staff;
import etu.upec.m2.model.StaffRole;
import java.util.List;
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
public class StaffService implements IStaffService{

    private static Logger log = Logger.getLogger(StaffService.class.getName());
    
    @PersistenceContext
    EntityManager em;
    
    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Long createStaff(Staff staff) {
        em.persist(staff);
        return staff.getId();
    }

    @Override
    public Long deleteStaff(Long id) {
        em.remove(em.find(Staff.class, id));
        return id;
    }

    @Override
    public Long updateStaff(Long id, Staff newStaff) {
        Staff staff=getStaffById(id);
        if(staff == null) {
            return new Long(0);
        }
        staff.setFirstname(newStaff.getFirstname());
        staff.setLastname(newStaff.getLastname());
        staff.setSalary(newStaff.getSalary());
        staff.setStatus(newStaff.getStatus());
        em.merge(staff);
        return id;
    }

    @Override
    public List<Staff> getAllStaff() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Staff getStaffById(Long id) {
        try{
            TypedQuery<Staff> query =  em.createNamedQuery("findStaffById", Staff.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
}
