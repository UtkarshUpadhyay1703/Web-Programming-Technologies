import {useState} from "react";
const Count=()=>{
    const [Count,setCount]=useState(0);
    const Increment=()=>{
        setCount(Count+1);
    }
    const Set=()=>{
        setCount(0);
    }
    return(
        <div>
            Hello
            <br/><br/>
            <button onClick={Increment}>Increment</button><br/><br/>
            {Count}<br/>
            <button onClick={Set}>Set</button>
        </div>
    )
}
export default Count;