import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Action_Employees";
 
 
 function DepartmentListDropdown(props) {
    //  const departmentList = useSelector(state => state.Employees_Reducers.DepartmentList)
    //  const fetchAllDepartment = useDispatch()
      
    useEffect(() => {
  
      props.fetchAllDepartment();
    },[]);
  
    const department=()=>{
        if(props.departmentList!=null){
          let Dept=[];
          props.departmentList.map((item,index)=>{
          Dept.push(item.DepartmentName);
          });
          return Dept;
        }
      }
        return (
            <Fragment>
                {department()}
            </Fragment>
        )
    }
    const mapStateToProps = (state) => ({
      employeeList: state.Employees_Reducers.list,
      departmentList: state.Employees_Reducers.DepartmentList
    
    });
    const mapActionToProps = {
      fetchAllEmployees: actions.fetchAllList,
      updateEmployees: actions.update,
      fetchAllDepartment: actions.fetchDepartmentList
    
    };
    
  export default connect(mapStateToProps, mapActionToProps)(DepartmentListDropdown);