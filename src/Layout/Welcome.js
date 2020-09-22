import React, { Component } from 'react'
import {  Jumbotron } from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron className="bg-dark text-white">
                  <h1>Welcome To React-js Plus Redux Crud !</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component
                    for calling extra attention to featured content or
                    information.
                  </p>
                </Jumbotron>
            </div>
        )
    }
}
