import React from "react";
//import "./App.css";
 import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import "./App.css";
import Employees from "./Components/Employees";

// import NavigationBar from "./Layout/NavigationBar";
// import Welcome from "./Layout/Welcome";
// import Footer from "./Layout/Footer";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//import { ToastProvider } from "react-toast-notifications";
// import InsertData from "./components/InsertData";
import CustomRoute from './CustomRoute'



export const Emp=()=>{
  return(
      <Container maxwidth="lg">
        <Employees/>
      </Container>
  )
}


function App() {
  // const marginTop = {
  //   marginTop: "20px",
  // };

  return (
    // <Router>
      
        <Provider store={store}>

          <CustomRoute />
          {/* <NavigationBar />
          <Container>

            <Row>
              <Col lg={12} style={marginTop}>
            
                <Switch>
                   
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/Employees" component={Emp}/>   */}
                    
                  {/* <Route exact path="/InsertData" component={InsertData}/>   */}
           
                {/* </Switch>
              </Col>
            </Row>
          </Container>
          
         
          <Footer /> */}
     
        </Provider>
      // </Router>
  
  );
}

export default App;
