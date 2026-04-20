import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions";
import "./EmployeeForm.css";

function EmployeeForm() {
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    title: "",
    department: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addEmployee(employee));

    setEmployee({
      name: "",
      email: "",
      title: "",
      department: ""
    });
  };

  return (
    <form className="EmployeeForm form-container" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={employee.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;