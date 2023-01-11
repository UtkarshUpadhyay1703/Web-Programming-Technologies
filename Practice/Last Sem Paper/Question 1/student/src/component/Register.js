import {useState} from "react";
// import { redirect } from "react-router-dom";
const Register=(props)=>{
    let [stud,setstud]=useState({studPRN:"",studPass:"",studConfpass:""});
    var AddStudent=(ob)=>{
        props.AddStud(ob);
        // redirect("/Login");
    }
    var change=(event)=>{
        var {name,value}=event.target
        setstud({...stud,[name]:value});
    }
    return(
        <div>
            <h3>Student Register</h3>
            <form>
            Enter PRN: <input type="text" value={stud.studPRN} onChange={change}></input><br/><br/>
            Enter Password: <input type="text" value={stud.studPass} onChange={change}></input><br/><br/>
            Enter Confirm Password: <input type="text" value={stud.studConfpass} onChange={change}></input><br/><br/>
            <button type="submit" onClick={AddStudent}>Submit</button>
             {/* Enter PRN: <input type="text" value={stud.studPRN} ></input>
            Enter Password: <input type="text" value={stud.studPass}></input>
            Enter Confirm Password: <input type="text" value={stud.studConfpass} ></input>
            <button type="submit" >Submit</button> */}
            </form>
        </div>
    )
}
export default Register;