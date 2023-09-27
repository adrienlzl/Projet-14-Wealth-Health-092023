import {combineReducers} from "redux";
import employeeReducer from "./employee.reducers"

export default  combineReducers({
    employee: employeeReducer,

})