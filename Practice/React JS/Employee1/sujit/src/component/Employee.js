import { useState } from "react";

const Employee=(props)=>{
    const [empob,setempob]=useState({Id:"",Name:"",Branch:""});
    var Change=(event)=>{
        let {name,value}=event.target
        setempob({...empob,[name]:value});
    }
    var Add=(event)=>{
        //
        // console.log(JSON.parse(JSON.stringify(empob)));
        // alert(empob.Id);
        props.AddEmp(empob);
    }
    return(
        <div>
            <form>
                <div>
{/* We have to give value name same as the object element name */}

                Enter Id :<input type="text" id="Id" name="Id" onChange={Change} value={empob.Id}></input><br/></div>
                
                <div>Enter Name :<input type="text" id="Name" name="Name" onChange={Change} value={empob.Name}></input><br/></div>
                
                <div>Enter Branch :<input type="text" id="Branch" name="Branch" onChange={Change} value={empob.Branch}></input><br/></div>
                
                <div><button type="button" id="btn" name="btn" onClick={Add}>Add</button></div>
            </form>
        </div>
    )
}
export default Employee;