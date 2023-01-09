import { Link } from "react-router-dom";

const EmployeeCard=(props)=>{
    // DeleteEmp=()=>{
    //     props.DelEmp(props.employee.empid);
    // }
    return(
        <div>
            <div>
                {props.employee.empid}
            </div>
            <div>
                {props.employee.ename}
            </div>
            <div>
                {props.employee.sal}
            </div>
            <div>
                <Link to="/Edit">
                    <button type="button">Edit</button>
                </Link>
            </div>
            {/* <div>
                    <button type="button" onClick={DeleteEmp}>Delete</button>
            </div> */}
        </div>
    )
}
export default EmployeeCard;