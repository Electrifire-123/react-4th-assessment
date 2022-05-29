import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../store/Details";

const AddStudents = () => {
  
  const [studentData, setStudentData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
    id: "",
  });

  const [students, setStudents] = useContext(store);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])
  };
  const { Name, Age, Course, Batch, id } = studentData;
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
            onChange={handleChange}
            name="Name"
            id={id}
          />
        </section>
        <section className="form-outline">
          <label className="form-label" htmlFor="formControlDefault">Age</label>
          <input
          className="form-control form-control-lg"
            type="text"
            value={Age}
            onChange={handleChange}
            name="Age"
            id={id}
          />
        </section>
        <section className="form-outline">
          <label className="form-label" htmlFor="formControlDefault">Course</label>
          <input
          className="form-control form-control-lg"
            type="text"
            value={Course}
            onChange={handleChange}
            name="Course"
            id={id}
            
          />
        </section>
        <section className="form-outline">
          <label className="form-label" htmlFor="formControlDefault">Batch</label>
          <input
          className="form-control form-control-lg"
            type="text"
            value={Batch}
            onChange={handleChange}
            name="Batch"
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
};

export default AddStudents;
