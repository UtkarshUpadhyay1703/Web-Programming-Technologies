import {useState} from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const Signin=(props)=>{
    let [studob,setstudob]=useState({studPRN:"",studPass:""});
    let change=(event)=>{
        let {name,value}=event.target
        setstudob({...studob,[name]:value});
    }
    var validate=()=>{
        return props.Students.map(student=>{
            if(stud.studPRN=studob.studPRN){
                return Redirect("/Display");
            }
        })
    }
    return(
        <div>
            <h2>Sign in Student</h2>
            Enter PRN: <input type="text" onChange={change} value={studob.studPRN}></input>
            Enter Password: <input type="text" onChange={change} value={studob.studPass}></input>
            <button type="submit" onClick={validate}>Submit</button>
        </div>
    )
}
export default Signin;