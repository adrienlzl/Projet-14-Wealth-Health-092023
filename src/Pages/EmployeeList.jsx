import React, {useState} from "react";
import Table from "../Components/Table/TableComponent";
import {columns} from "../Data/Data.collums";
import { useSelector } from 'react-redux';
import ResearchEmployee from "../Components/ResearchEmployee/ResearchEmployee";
import TableSize from "../Components/TableSize/TableSize";
import NumberEntries from "../Components/NumberEntries/NumberEntries";
import PageSwitcher from "../Components/PageSwitcher/PageSwitcher";
import "../css/Pages/EmployeeList.scss"


function EmployeeList() {
    const employees = useSelector((state) => state.employee);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [tableSize, setTableSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const firstDisplayedRow = (currentPage - 1) * tableSize + 1;
    const lastDisplayedRow = Math.min(currentPage * tableSize, filteredEmployees.length);
    const handleSearchChange = (filteredEmployees) => {
        setFilteredEmployees(filteredEmployees);
    };
    const handlePageSIzeChange = (newSize) =>
        setTableSize(newSize)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const totalPages = Math.ceil(filteredEmployees.length / tableSize);
    const startIndex = (currentPage - 1) * tableSize;
    const endIndex = startIndex + tableSize;
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

    return (
        <div id="employee-div" className="container">
           <div className="dataTables_wrapper no-footer">
                <TableSize onPageSizeChange={handlePageSIzeChange}/>
                <ResearchEmployee onSearchChange={handleSearchChange} />
            <Table columns={columns} data={paginatedEmployees} tableSize={tableSize} />
                <NumberEntries
                    firstDisplayedRow={firstDisplayedRow}
                    lastDisplayedRow={lastDisplayedRow}
                    totalEntries={filteredEmployees.length}/>
                <PageSwitcher currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
           </div>
        </div>
    );
}

export default EmployeeList;