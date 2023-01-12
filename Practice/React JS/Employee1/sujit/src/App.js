import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Employee from './component/Employee';
import Display from "./component/Display";
function App() {
  const [emparr,setemparr]=useState([]);

  const EmployeeAdd=(ob)=>{
    console.log("in add");
    alert(ob.Id+" "+ob.Name);
    let newarr = [...emparr,{...ob}]
    // alert(JSON.stringify(ob));
    setemparr(newarr);
  }


  return (
    <div className="App">
      <Employee AddEmp={EmployeeAdd}></Employee>
      <Display employees={emparr}></Display>
    </div>
  );
}

export default App;
