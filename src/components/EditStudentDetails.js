import React, { useContext, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { store } from "../store/Details";

const EditStudentDetails = (props) => {
    const params = useParams();
    const {id} = params;
    const [students, setStudents] = useContext(store);
    const [studentData, setStudentData] = useState(students[id]);
    
    
      const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        students[id]=studentData;
        setStudents(students);
      };
      const { Name, Age, Course, Batch } = studentData;//id
      console.log(props)
      return (
        <>
        {/* {console.log(studentData)}; */}
          <div className="container">
            <section className="form-outline">
              <label className="form-label" htmlFor="formControlDefault">Name</label>
              <input
              className="form-control form-control-lg"
                type="text"
                value={Name}
                name="Name"
                onChange={handleChange}
                id={id}
              />
            </section>
            <section className="form-outline">
              <label className="form-label" htmlFor="formControlDefault">Age</label>
              <input
              className="form-control form-control-lg"
                type="text"
                value={Age}
                name="Age"
                onChange={handleChange}
                id={id}
              />
            </section>
            <section className="form-outline">
              <label className="form-label" htmlFor="formControlDefault">Course</label>
              <input
              className="form-control form-control-lg"
                type="text"
                value={Course}
                name="Course"
                onChange={handleChange}
                id={id}
                
              />
            </section>
            <section className="form-outline">
              <label className="form-label" htmlFor="formControlDefault">Batch</label>
              <input
              className="form-control form-control-lg"
                type="text"
                value={Batch}
                name="Batch"
                onChange={handleChange}
                id={id}
              />
            </section>
          </div>
          <div className="container">
              
          <Link className="btn btn-primary m-1" to='/student'>Cancel</Link>
          <Link className="btn btn-primary m-1" to='/student' onClick={handleSubmit}>Submit</Link>
          </div>
    
        </>
      );
}

export default  EditStudentDetails;