import {useState} from "react";
const EmployeeForm=(props)=>{
    let [empob,setempob]=useState({eId:"",eName:"",eDesg:""});
    var Change=(event)=>{
        const {name,value} = event.target
        setempob({...empob,[name]:value});
    }
    var AddData=()=>{
        props.AddEmployee(empob);
    }
    return(
        <div>
            <form>
            <label for="eId">ID</label><input type="number" id="eId" name="eId" onChange={Change} value={empob.eId}></input><br/>
            <label for="eName">Name</label><input type="text" id="eName" name="eName" onChange={Change}value={empob.eName}></input><br/>
            <label for="eDesg">Desg</label><input type="text" id="eDesg" name="eDesg" value={empob.eDesg}onChange={Change}></input><br/>
            <button type="button" id="btn" name="btn" onClick={AddData} >Add</button>
            </form>
        </div>
    )
}
export default EmployeeForm;