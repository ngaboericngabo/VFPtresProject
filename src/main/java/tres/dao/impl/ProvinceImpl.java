/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tres.dao.impl;

import java.util.List;
import tres.dao.generic.AbstractDao;
import tres.dao.interfc.IProvince;
import tres.domain.Province;

public class ProvinceImpl  extends  AbstractDao<Long, Province> implements  IProvince {

    @Override
    public Province saveProvince(Province province) {
        return saveIntable(province);
    }

    @Override
    public List<Province> getListProvinces() {
        return (List<Province>)(Object)getModelList(); 
    }

    @Override
    public Province getProvinceById(int ProvinceId, String primaryKeyclomunName) {
        return (Province) getModelById(ProvinceId,primaryKeyclomunName);
    }

    @Override
    public Province UpdateProvince(Province Province) {
          return updateIntable(Province);
    }
    
}
