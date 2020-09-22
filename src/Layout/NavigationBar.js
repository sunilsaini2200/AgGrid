import React, { Component } from "react";


import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
// import InsertData from '../components/InsertData';

import Images from './images.png'
export default class NavigationBar extends Component {
  render() {
    return (



      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand"> 
   
    {/* <img src={require("./images.png" )}width="198" height="50" alt="description of image"/> */}
 
    <img src={Images} alt={"Images"} width="50" height="50"/> 
    </Link>

        <Navbar.Brand href="/"></Navbar.Brand>

        <Nav className="mr-auto">
          {/* <Link to={"Add"} className="nav-link"> Add</Link> */}

          <Link to={"/Employees"} className="nav-link">
            <FontAwesomeIcon icon={faList} /> Listing
          </Link>

         

          <div className="topnav-right"></div>
        </Nav>
        <div>
          {/* <InsertData /> */}
        {/* <Link className="btn btn-outline-light" to="/InsertData">
          <FontAwesomeIcon icon={faPlusSquare} /> New Create
        </Link> */}
        </div>
       
      </Navbar>
    );
  }
}
