import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
function HouseIcon({onClick}) {


    return (
        <>
            <FontAwesomeIcon icon={faHome} onClick={onClick} className="house-icon-calendar"/>
        </>
    )
}

export default HouseIcon