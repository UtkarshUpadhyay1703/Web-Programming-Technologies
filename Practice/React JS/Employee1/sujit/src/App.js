import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Employee from './component/Employee';
import Display from "./component/Display";
function App() {
  let [emparr,setemparr]=useState([{Id:"",Name:"",Branch:""}]);

  let EmployeeAdd=(ob)=>{
    // alert(JSON.stringify(ob));
    setemparr([...emparr,{...ob}]);
  }


  return (
    <div className="App">
      <Employee AddEmp={EmployeeAdd}></Employee>
      <Display employees={emparr}></Display>
    </div>
  );
}

export default App;
