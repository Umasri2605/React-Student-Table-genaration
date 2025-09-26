import React from "react"
import students from "../assets/students.json"
function StudentsTable(){
  var [allstudents,setallstudents]=React.useState([...students]);
    return (
    
        <table border="2em" style={{marginLeft:"120px",width:"80%"}}>
            <thead>
                    <tr>
                         <th>Thumbnail</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>FatherName</th>
                        <th>MotherName</th>
                        

                    </tr>
                </thead>
          {
            allstudents.map((student)=>{
              return (
                <tr style={student.gender=="Female" ?{backgroundColor:"lightpink"} :{backgroundColor:'lightblue'}}>
                  {
                    student.gender=="Female" && (<td><img width="50px" src="https://img.pikbest.com/png-images/20241009/professional-corporate-woman-icon-_10941890.png!w700wp"/></td>)
                  }
                  {
                    student.gender=="Male" && (<td><img width="50px" src="https://img.pikbest.com/png-images/20241009/professional-corporate-man-icon-_10941759.png!sw800"/></td>)
                  }
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.motherName}</td>
                </tr>
              )
            });
          }
        </table>
    )
}
export default StudentsTable;