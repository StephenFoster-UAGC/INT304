import { ADD_EMPLOYEE } from "./actions";

const initialState = {
  employees: JSON.parse(localStorage.getItem("employees")) || []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const updatedEmployees = [...state.employees, action.payload];

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return {
        ...state,
        employees: updatedEmployees
      };

    default:
      return state;
  }
};

export default employeeReducer;