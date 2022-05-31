import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../store/Details";

const Student = () => {
  const [students] = useContext(store)
  console.log(students)
  return (
    <div className="container text-center">
      
      <div className="d-flex justify-content-between">
        <h1>Student</h1>
        <Link className="btn btn-primary m-1" to='/add-student'>Add Students</Link>
      </div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col"> Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">change</th>
          </tr>
        </thead>
        <tbody>
        {students.map((students) => (
          <tr key={students.id}>
          <th>{students.Name}</th>
          <td>{students.Age}</td>
          <td>{students.Course}</td>
          <td>{students.Batch}</td>
          <td><Link to={`/edit-student-details/${students.id}`}>Edit</Link></td>
        </tr>
        ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Student;
