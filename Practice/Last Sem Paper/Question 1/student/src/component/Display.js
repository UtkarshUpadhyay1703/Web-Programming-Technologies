const Display=(props)=>{
    let [studarr,setstudarr]=useState([{studRoll:"101",studName:"Mayur",studCourse:"DAC",studDOA:"15-03-2022",studMar:"182",studPhNo:"8369574210"},{studRoll:"102",studName:"Ganesh",studCourse:"DBDA",studDOA:"15-03-17-03-2022",studMar:"145",studPhNo:"7523046891"},{studRoll:"103",studName:"Swapnali",studCourse:"DAC",studDOA:"15-03-2022",studMar:"182",studPhNo:"8369574210"},{studRoll:"101",studName:"Mayur",studCourse:"DAC",studDOA:"15-03-2022",studMar:"182",studPhNo:"8369574210"},{studRoll:"101",studName:"Mayur",studCourse:"DAC",studDOA:"15-03-2022",studMar:"182",studPhNo:"8369574210"}]);

    const Render=()=>{
        return studarr.map(stud=>{
            return <tr><td>{stud.studRoll}</td><td>{stud.studName}</td><td>{stud.studCourse}</td><td>{stud.studDOA}</td><td>{stud.studMar}</td><td>{stud.studPhNo}</td></tr>
        })
    }
    // cosnt AddStudent=()=>{

    // }

    return(
        <div>
            <table><tr><th>Roll No </th><th>Student Name </th><th>Course </th><th>DOA </th><th>Marks </th><th>Phone No</th></tr>
            {Render()};
            {/* <button type="submit" onClick={AddStudent} >Insert New Student</button> */}
            </table>
        </div>
    )
}
export default Display;