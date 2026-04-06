import logo from './logo.svg';
import './App.css';
import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import './EmployeeForm.css'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  // Load employees data from localStorage
  componentDidMount() {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      this.setState({
        employees: JSON.parse(savedEmployees)
      });
    }
  }

  // Add employees to localStorage
  addEmployee = (employee) => {
    const updatedEmployees = [...this.state.employees, employee];

    this.setState({
      employees: updatedEmployees
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  render() {
    return (
      <div className="app-container">
        <h1>Employee Management</h1>

        <EmployeeForm addEmployee={this.addEmployee} />

        <h2>Employee List</h2>
        <ul>
          {this.state.employees.map((emp, index) => (
            <li key={index}>
              {emp.name} - {emp.email} - {emp.title} - {emp.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default App;

