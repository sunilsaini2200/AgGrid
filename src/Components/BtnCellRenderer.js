import * as actions from "../actions/Action_Employees";
import {   } from "react-bootstrap";
import "../App.css";
import React from 'react'
import { connect } from "react-redux";
import "../Components/Buttons.css"


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  // const { notify } = toast()

  toast.configure()
function BtnCellRenderer(props) {

  //toast msg.

// const notify =()=>{
//   toast('Deleted successfully')
// }
  function onDelete (force =false){
    let data= props.data;
    let confirm= true;
    if(!force){
      // confirm = window.confirm(`Are You Sure You Want to Delete This Record...?: ${JSON.stringify(data)})`)
      confirm = window.confirm(`Are You Sure You Want to Delete This Record ?`)
      
     
    }
    if(confirm){
      // console.log(data);
      toast.error('Deleted successfully')
      props.deleteEmployee(Number(data.empId))
      props.api.updateRowData({ remove: [data] });
      props.api.refreshView({ force: true });
    }
  }
  return (
    <div>
      <button className="btn-Delete btn-sm" onClick={() => onDelete()}> <i className="fa fa-trash"></i></button>
     
        </div>
  )
}

const mapActionToProps = {
  
  deleteEmployee: actions.Delete,
};
export default connect(null, mapActionToProps)(BtnCellRenderer);