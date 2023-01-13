import HappilyService from "./HappilyService";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

const Display=()=>{
    const [happarr,sethapparr]=useState([]);

    useEffect (()=>{
        HappilyService.getHappiness().then((result)=>{
            console.log(result.data);
            sethapparr(result.data);
        });
    },[]);
    
    const renderList=()=>{
        alert("render");
        return happarr.map((happ)=>{alert(happ.id);
        return <tr key={happ.id}><td>{happ.id}</td><td>{happ.name}</td><td>{happ.location}</td></tr>}
        )
    }
    return(
        <div>

<Link to="/AddHappy">
    <button type="button" name="btn" id="btn">Add Happiness</button>
</Link>

            <h2>Happy </h2>
            <table>
                    <thead>
                <th>id </th>
                <th>name </th>
                <th>location </th>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}
export default Display;