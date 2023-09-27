import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ResearchEmployee.scss"

function ResearchEmployee({onSearchChange }) {
    const [searchText, setSearchText] = useState("");
    const employees = useSelector((state) => state.employee);
    const filteredEmployees = employees.filter((employee) =>
        Object.values(employee).some((value) =>
        value && value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
        );
    useEffect(() => {
        onSearchChange(filteredEmployees);
    }, [filteredEmployees, onSearchChange]);

    return (
        <div className="research-employee-contenaire">
            <p className="research-employee-p">Search:</p>
            <input
                type="text"
                placeholder="Search employee"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="input-research-employee"
            />
        </div>
    );
}

export default ResearchEmployee;