import logo from './logo.svg';
import './App.css';
import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import './EmployeeForm.css';
import EmployeeList from "./components/EmployeeList";
import { Routes, Route } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";

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
          <Routes>
            <Route 
              path="/" 
              element={
            <>
              <EmployeeForm addEmployee={this.addEmployee} />
              <EmployeeList employees={this.state.employees} />
            </>
                      } 
            />

            <Route 
              path="/employees/:id" 
              element={<EmployeeDetails employees={this.state.employees} />} 
            />
        </Routes>
      </div>
    );
  }
}


export default App;

