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
            <label htmlFor="state">State</label>
            <select name="state"  className="select-from"  onChange={handleStateChange} value={stateCountry}>
                {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
        </>
    )
}
export default Country