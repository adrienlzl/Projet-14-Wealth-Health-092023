import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navlink.scss"

function EmployeeListNavlink() {



    return(
        <>
            <NavLink exact={true.toString()} to="/employeeList" className="employee-list-navlink">
                View Current Employees
            </NavLink>
        </>
    )
}

export default EmployeeListNavlink