import React from "react";
import "./EmployeeForm.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  return (
    <div className="form-container">
        <h2>Employee List</h2>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employees/${index}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;