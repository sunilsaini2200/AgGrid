import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import "./App.css";
import Employees from "./Components/Employees";
import { Container} from "react-bootstrap";
import CustomRoute from './CustomRoute'



export const Emp=()=>{
  return(
      <Container maxwidth="lg">
        <Employees/>
      </Container>
  )
}


function App() {

  return (
   
      
        <Provider store={store}>

          <CustomRoute />
         
        </Provider>
   
  );
}

export default App;
