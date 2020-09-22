import api from "./api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_Department : 'FETCH_Department'
}

export const fetchAllList = () => dispatch => {
    api.Default().fetchAllList()
        .then(response => {
             // console.log(response)   // data chk karne ke liye console mein
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}
export const fetchDepartmentList =()=> dispatch =>{
  api.Default().fetchDepartmentList()
  .then(response =>{
    dispatch({
      type:ACTION_TYPES.FETCH_Department,
      payload:response.data
    })
  })
  .catch(err=> console.log(err))
}

export const Delete = (emp_Id, onSuccess) => (dispatch) => {
    api.Default().delete(emp_Id)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.DELETE,
          payload: emp_Id,
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };
  
  export const update = (data) => (dispatch) => {
   
    api
      .Default()
      .update(data)
      .then((res) => {
        if(res.status===200){
          toast.info('Updated successfully..!')
         // window.location.reload(true);
        }
        
        // alert(res.data);
        dispatch({
          type: ACTION_TYPES.UPDATE,
          payload: {...data },
        });
        
      })
      .catch((err) => console.log(err));
  };