import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "./Layout/NavigationBar";
import Welcome from "./Layout/Welcome";
import Footer from "./Layout/Footer";
import Employees from './Components/Employees'

export default class CustomRoute extends Component {
     marginTop = {
        marginTop: "20px",
      };
    render() {
        return (
            <Router>
                <NavigationBar />
                <Container>

                    <Row>
                        <Col lg={12} style={this.marginTop}>

                            <Switch>

                                <Route exact path="/" component={Welcome} />
                                <Route exact path="/Employees" component={Employees} />

                                {/* <Route exact path="/InsertData" component={InsertData}/>   */}

                            </Switch>
                        </Col>
                    </Row>
                </Container>


                <Footer />

            </Router>
        )
    }
}
