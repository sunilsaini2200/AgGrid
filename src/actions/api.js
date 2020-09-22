import axios from "axios";


const baseUrl = "https://localhost:44398/api/"



export default {

    Default(url = baseUrl + 'Default/') {
        return {
            fetchAllList: () => axios.get(url),
            fetchById: emp_Id => axios.get(url + emp_Id),
            create: newRecord => axios.post(url, newRecord),
            update: (updateRecord) => {
                    // console.log(url+"UpdateEmployee");
                return axios.post(url+"UpdateEmployee", updateRecord);
            
            },
            delete: emp_Id => axios.delete(url + (emp_Id)),
           fetchDepartmentList:()=> axios.get(url+"DepartmentGet")
        }
    }
}