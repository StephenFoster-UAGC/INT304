import React from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <h1>Employee Management</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeForm />
              <EmployeeList />
            </>
          }
        />

        <Route
          path="/employees/:id"
          element={<EmployeeDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;