/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tres.dao.impl;

import tres.dao.generic.AbstractDao;
import tres.dao.interfc.IuserCategory;
import tres.domain.UserCategory;
import java.util.List;

/**
 *
 * @author RTAP4
 */
public class UserCategoryImpl extends  AbstractDao<Long, UserCategory> implements  IuserCategory {

    @Override
    public  UserCategory saveUsercategory(UserCategory usercategory) {
        return saveIntable(usercategory);
    }

    @Override
    public List<UserCategory> getListUsercategory() {
           return (List<UserCategory>)(Object)getModelList();  //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public  UserCategory UpdateUsercategory(UserCategory usercategory) {
         return updateIntable(usercategory);
    }
    public boolean  createTable(){
    creatingNewTable();
    return true;
    }
}
