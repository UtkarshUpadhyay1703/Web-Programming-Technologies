import logo from './logo.svg';
import './App.css';
import Count from "./component/Count";
import {useState} from "react";
import EmployeeDisplay from "./component/EmployeeDisplay";
import EmployeeForm from "./component/EmployeeForm";
function App() {
  let [emparr,setempar]=useState([{eId:"1",eName:"jhk",eDesg:"fgh"},{eId:"2",eName:"fgd",eDesg:"jthrt"}]);
  var AddData=(ob)=>{
    setempar([...emparr,{...ob}]);
  }
  return (
    <div className="App">
      <Count></Count>
      <EmployeeDisplay employee={emparr}></EmployeeDisplay>
      <EmployeeForm AddEmployee={AddData}></EmployeeForm>
    </div>
  );
}

export default App;
