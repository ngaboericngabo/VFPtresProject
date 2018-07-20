package tres.dao.interfc;
import java.util.List;
import tres.domain.Department;


public interface IDepartment {
       public Department saveDepartment(Department department);
       public List<Department> getListDepartments();
       public Department getDepartmenttById(int departmentId,String primaryKeyclomunName);
       public Department UpdateDepartment(Department department);     
}
