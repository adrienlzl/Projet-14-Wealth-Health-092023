import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navlink.scss"

function HomeNavlink() {



    return(
        <>
            <NavLink exact={true.toString()} to="/" className="home-navlink">
                HRnet
            </NavLink>
        </>
    )
}

export default HomeNavlink