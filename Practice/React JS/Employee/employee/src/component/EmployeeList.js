import {Link} from "react-router-dom";
const EmployeeList=(props)=>{
    Render=()=>{
        return props.employee.map((emp)=>{
            return <EmployeeCard employee={emp}></EmployeeCard>
        })
    }
    return(
        <div>
            <Link to="/AddEmp">
            <button id="add" name="add">Add Employee </button>
            </Link>
            {Render()}
        </div>
    )
}
export default EmployeeList;