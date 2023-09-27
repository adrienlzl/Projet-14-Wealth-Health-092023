import React, {useState} from "react";
import {states} from "../../Data/Data.Country"


function Country({onSelectState  }) {
    const [stateCountry, setStateCountry] = useState("");
    const handleStateChange = (event) => {
        const newState = event.target.value;
        setStateCountry(newState);
        onSelectState(newState);
    }
    return (
        <>
        </>
    )
}
export default Country