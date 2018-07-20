/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tres.dao.impl;

import java.util.List;
import tres.dao.generic.AbstractDao;
import tres.dao.interfc.IDepartment;
import tres.domain.Department;


public class DepartementImpl extends  AbstractDao<Long, Department> implements  IDepartment{

    @Override
    public Department saveDepartment(Department department) {
              return saveIntable(department);
    }

    @Override
    public List<Department> getListDepartments() {
                return (List<Department>)(Object)getModelList();
    }

    @Override
    public Department getDepartmenttById(int departmentId, String primaryKeyclomunName) {
         return (Department) getModelById(departmentId,primaryKeyclomunName);
    }

    @Override
    public Department UpdateDepartment(Department department) {
          return updateIntable(department);
    }
   
 
}
