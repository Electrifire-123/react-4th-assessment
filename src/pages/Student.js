import React from "react";

const Student = () => {
  return (
    <div className="container text-center">
      <h1>Student</h1>
      <table class="table table-bordered border-primary">
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
          <tr>
            <th >Rahul</th>
            <td>21</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <th >Sarang</th>
            <td>20</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
          <tr>
            <th >Harsh</th>
            <td>19</td>
            <td>MERN</td>
            <td>November
            </td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Student;
