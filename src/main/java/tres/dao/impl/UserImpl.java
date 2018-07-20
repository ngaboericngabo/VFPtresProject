/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tres.dao.impl;

import tres.dao.generic.AbstractDao;
import tres.dao.interfc.IUsers;
import tres.domain.Users;
import java.util.List;
import java.util.logging.Logger;


/**
 *
 * @author RTAP4
 */
public class UserImpl extends AbstractDao<Long, Users> implements IUsers{
   private static final Logger LOGGER = Logger.getLogger(
            Thread.currentThread().getStackTrace()[0].getClassName());

    @Override
    public Users saveUsers(Users users) {
         return saveIntable(users);  
    }

    @Override
    public List<Users> getListUsers() {
       return (List<Users>)(Object)getModelList(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Users UpdateUsers(Users users) {
       return updateIntable(users);//To change body of generated methods, choose Tools | Templates.
    }

   

    @Override
    public Users gettUserById(int userId,String primaryKeyclomunName) {
      
       return (Users) getModelById(userId,primaryKeyclomunName);
         //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
      public boolean  createTable(){
    creatingNewTable();
    return true;
    }

    @Override
    public Users getUsersWithQuery(String[] propertyName, Object[] value, String hqlStatement) {
      try {
          return (Users)getModelWithMyHQL(propertyName, value, hqlStatement); 
      } catch (Exception ex) {
          LOGGER.info("My Query error ::::"+ ex.getMessage());
      }
      return null;
    }
}
