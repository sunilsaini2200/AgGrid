import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Action_Employees";
import { Card, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList} from "@fortawesome/free-solid-svg-icons";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import BtnCellRenderer from "../Components/BtnCellRenderer";


 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

import '../App.css';
import DateEditor from "./DateEditor";

 toast.configure()

const Employees = (props) => {
  useEffect(() => {
    props.fetchAllEmployees();
    props.fetchAllDepartment();
  }, []);

  // const notify =()=>{
  //   toast('Updated successfully...!')
  // }

  const [Filter, setFilter] = useState("");

  let Update = [];
  const onCellValueChanged = (e) => {
    var department = props.departmentList.filter(el => el.DepartmentName === e.data.Department);
    const Data = {
      emp_Id: Number(e.data.empId),
      Name: e.data.Name,
      Address: e.data.Address,
      Dob: e.data.Age,
      Department: department[0].Department_Id,
    }
    console.log(Data);
    //props.updateEmployees(Data);

    Update.push(Data)
  }


  const department = () => {
    if (props.departmentList != null) {
      let Dept = [];
      props.departmentList.map((item, index) => {
        Dept.push(item.DepartmentName);
      });
      return Dept;
    }
  }



  const columnDefs = [
    {
      headerName: "Employees Id",
      field: "empId",
      sortable: true,
      filter: true,
      resizable: true,
      hide: false,
      width: 140,
      editable: false,
      checkboxSelection: true,
    },

    {
      headerName: "Name",
      field: "Name",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
     
    },

    {
      headerName: "Address",
      field: "Address",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,

    },
    {
      headerName: "Date (Datepicker)",
      field: "Age",
      cellEditor: "dateEditor",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true

    },
    {
      headerName: "Department",
      field: "Department",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: department(),

      },

    },
    {
      headerName: "Action",
      editable: false,
      field: "value",
      pinned: "left",
      cellRenderer: "btnCellDlt",
      headerClass: "btn-danger",
      
      width: 110

    },

  ];

  const frameworkComponents = {
    btnCellDlt: BtnCellRenderer,
    dateEditor: DateEditor,
   

  };




  const rowData = [];
  props.employeeList.map((item, index) => {
    rowData.push({
      // sNo:index+1,
      empId: item.emp_Id,
      Name: item.Name,
      Address: item.Address,
      Age: item.Dob ? item.Dob.substring(0, 10) : null,
      // Age:item.Dob,
      Department: item.DepartmentName,
      Department_Id: item.Department_Id

    });
  });



  //Searching Fild
  let Data = rowData.filter((item) => {
    return item.Name.toLowerCase().indexOf(
      Filter.toLowerCase()) !== -1
      || item.Address.toLowerCase().indexOf(Filter.toLowerCase()) !== -1
      || item.empId.toString().toLowerCase().indexOf(Filter.toLowerCase()) !== -1
  });

  const updateAllList = (e) => {
    // console.log('data after change is', e.data);
    // var department=props.departmentList.filter(el=>el.DepartmentName===e.data.Department);
    // const Data = {
    //   emp_Id: Number(e.data.empId),
    //   Name: e.data.Name,
    //   Address: e.data.Address,
    //   Dob: e.data.Age,
    //   Department: department[0].Department_Id,
    // }
    // console.log(Data);
if(Update.length!==0)
{
    props.updateEmployees(Update);
}
else{
 // alert("please select the record")
  toast('please select the record...?')
}
  }

  return (

    <div>
      <Container >
        <Card className="Card_Colour">
          <div className="searchBox">
            <input className="searchInput" type="text" value={Filter} onChange={(e) => setFilter(e.target.value)} name="" placeholder="Search" />
            <button className="searchButton" href="#">
              <i className="material-icons">search</i>
            </button>
          </div>
          <div >
            <button className="updateAllList" onClick={updateAllList}><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i> Update All</button>

          </div>
          <Card.Header> <FontAwesomeIcon icon={faList} /> Listing
          </Card.Header>
          <Card.Body>
            <div
              id="myGrid"
              className="ag-theme-alpine"
              style={{ height: "500px", width: "1000px" }}
            >
              <AgGridReact
                columnDefs={columnDefs}
                rowData={Data}
                rowSelection="multiple"
                onCellValueChanged={onCellValueChanged}
                animateRows="true"
                // rowHeight={40}
                // enabelFilter="true"
                // floatingFilter="true"

                editType="fullRow"                       // Full row editing 
                pagination="true"
                paginationPageSize="8"


                frameworkComponents={frameworkComponents}

              ></AgGridReact>

            </div>

          </Card.Body>

        </Card>
      </Container>
    </div>
  );
};






const mapStateToProps = (state) => ({
  employeeList: state.Employees_Reducers.list,
  departmentList: state.Employees_Reducers.DepartmentList

});
const mapActionToProps = {
  fetchAllEmployees: actions.fetchAllList,
  updateEmployees: actions.update,
  fetchAllDepartment: actions.fetchDepartmentList

};

export default connect(mapStateToProps, mapActionToProps)(Employees);



