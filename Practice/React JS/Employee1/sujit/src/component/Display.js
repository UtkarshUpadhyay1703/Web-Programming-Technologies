
const Display=(props)=>{
    const Render=()=>{
        return props.employees.map((emp)=>{
            return <tr key={emp.Id}><td>{emp.Id}</td><td>{emp.Name}</td><td>{emp.Branch}</td></tr>
        })
    }
    return(
        <div>
            <table>
                <tr>
                    <thead>
                    <th>Id:</th>
                    <th>Name:</th>
                    <th>Branch:</th>
                    </thead>
                </tr>
                <tbody>
                {Render()}
                </tbody>
            </table>
        </div>
    )
}
export default Display;