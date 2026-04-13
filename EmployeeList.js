import React from 'react';
import './EmployeeForm.css';
import { Link } from "react-router-dom";

function EmployeeList(props) {

    // Render employee list
    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            <ul>
                {props.employees.map((employee, index) => (
                    <li key={index}>
                        {/* Create a link to the employee detail page */}
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