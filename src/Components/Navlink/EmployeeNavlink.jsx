import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navlink.scss"

function EmployeeNavlink() {



    return(
        <>
            <NavLink exact={true.toString()} to="/employee" className="employee-navlink">
                Create Employee
            </NavLink>
        </>
    )
}

export default EmployeeNavlink