import { legacy_createStore as createStore} from 'redux';
import employeeReducer from "./reducer";

export const store = createStore(employeeReducer);