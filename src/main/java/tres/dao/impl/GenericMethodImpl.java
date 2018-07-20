/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tres.dao.impl;

import java.util.List;
import tres.dao.generic.AbstractDao;
import tres.dao.interfc.IGenericMethod;

/**
 *
 * @author Eric
 */
public class GenericMethodImpl<Long, Object> extends  AbstractDao<Long, Object> implements  IGenericMethod<Long, Object>  {

    @Override
    public  Object saveObject(Object object) {
        
        return saveIntable(object);
    }

    @Override
    public List<Object> getListOfObjects() {
            return (List<Object>)(Object)getModelList();
    }

    @Override
    public Object getObjectById(int objectId, String primaryKeyclomunName) {
          return (Object) getModelById(objectId,primaryKeyclomunName);
    }

    @Override
    public Object updateObject(Object object) {
        return updateIntable(object);
    }
    
}
