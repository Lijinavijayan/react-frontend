import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployee from './components/UpdateEmployee';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CreateEmployeeForm from './components/CreateEmployeeForm';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
          <HeaderComponent></HeaderComponent>  
          <div className="container">
            <switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeForm}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
              <Route path="/view-employee" component={ViewEmployee}></Route>
              </switch>
          </div>
          <FooterComponent></FooterComponent>
          
    </div>
  );
}

export default App;
