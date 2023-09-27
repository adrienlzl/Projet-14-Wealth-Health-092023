import React from "react";
import './Header.scss'
import HomeNavlink from "../Navlink/HomeNavlink";
import EmployeeNavlink from "../Navlink/EmployeeNavlink";
import EmployeeListNavlink from "../Navlink/EmployeeListNavlink";

function Header() {
    return (
        <div className="header-container">
           <HomeNavlink/>
            <EmployeeNavlink/>
            <EmployeeListNavlink/>
        </div>
    );
}

export default Header;