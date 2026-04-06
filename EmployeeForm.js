import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
            name: "",
            email: "",
            title: "",
            department: ""
        };
     }
 
    // your methods for handling input and form submission will go here

    // handle input changes
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //handle form submission
    handleSubmit  = (event) => {
        event.preventDefault();
        // removed - console.log("Employee Data:", this.state);

        // Send data to App.js
        this.props.addEmployee(this.state);

        // Clear Form
        this.setState({
            name: "",
            email: "",
            title: "",
            department: ""
        });
    };

    render() {
        return (
            <div className="form-container">
                <h2>Employee Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmFor="name">Name: </label>    
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmFor="title">Title: </label>
                     <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                        <label htmFor="department">Department: </label>
                     <input
                        type="text"
                        name="department"
                        placeholder="Enter Department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                        <button type="submit">Submit</button>        
                    </div>
                </form>
            </div>
        );
    }

 }

 export default EmployeeForm;
