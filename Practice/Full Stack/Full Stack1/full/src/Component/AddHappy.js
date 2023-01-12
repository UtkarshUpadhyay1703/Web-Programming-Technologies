import {useState} from "react";
import { useHistory } from "react-router-dom";
import HappilyService from "./HappilyService";

const AddHappy=()=>{
    var [happob,sethappob]=useState({id:"",name:"",location:""});
    let history=useHistory();
    var Change=(event)=>{
        var {name,value}=event.target
        sethappob({...happob,[name]:value});
    }
    var Add=(event)=>{
        HappilyService.getAddHappiness(happob).then((result)=>{
            console.log(result.data);
            history.push("/Display");
        })
    }
    return(
        <div>
            <form>
                Enter Id:<input id="id" name="id" value={happob.id} onChange={Change}></input><br/>
                Enter Name:<input id="name" name="name" value={happob.name} onChange={Change}></input><br/>
                Enter Location:<input id="location" name="location" value={happob.location} onChange={Change}></input><br/>
                <button id="btn" name="btn" onClick={Add}>Add</button>
            </form>

        </div>
    )
}
export default AddHappy;
