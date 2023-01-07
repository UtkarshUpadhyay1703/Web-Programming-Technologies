const EmployeeDisplay=(props)=>{
    const RenderList=()=>{
        return props.employee.map((emp,index)=>{
            return <tr><td>{emp.eId}</td><td>{emp.eName}</td><td>{emp.eDesg}</td></tr>
        })
    }
    return(
        <div>
            <table><tr><th>eId</th><th>eName</th><th>eDesg</th></tr>
            {RenderList()}
            </table>
        </div>
    )
}
export default EmployeeDisplay;