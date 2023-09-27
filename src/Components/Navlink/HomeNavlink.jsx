import React from "react";
import { NavLink } from 'react-router-dom';

function HomeNavlink() {



    return(
        <>
            <NavLink exact={true.toString()} to="/employee" className="home-navink">
                Create a new employee
            </NavLink>
        </>
    )
}

export default HomeNavlink