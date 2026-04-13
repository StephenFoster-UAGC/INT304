import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetails(props) {
  const { id } = useParams();

  // Get the selected employee using the index from the URL
  const employee = props.employees[id];

  // Handle invalid or missing employee
  if (!employee) {
    return (
      <div>
        <h2>Employee not found</h2>
        <Link to="/">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>

      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>

      <br />

      <Link to="/">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetails;