import React from "react";
import { NavLink } from 'react-router-dom';

function EmployeePageNavlink() {



    return(
        <>
            <NavLink exact={true.toString()} to="/employee" className="employee-list-navlink">
                Create a new employee
            </NavLink>
        </>
    )
}

export default EmployeePageNavlink