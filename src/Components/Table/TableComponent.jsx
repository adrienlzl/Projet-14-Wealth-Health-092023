import React, { useState } from "react";
import "./TableComponent.scss";
import { useTable, useSortBy } from 'react-table';
import {sortingTable} from "../../Utils/sortingTable"
import {useSelector, useDispatch} from "react-redux";


function TableComponent({ data, columns, tableSize }) {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const employees = useSelector((state) => state.employee);
    const dispatch = useDispatch();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            tableSize,
        },
        useSortBy
    );
    const paginatedRows = rows.slice(0, tableSize);

    const handleSort = (clickedColumn) => {
        let newSortDirection = "asc";

        if (clickedColumn === sortColumn) {
            newSortDirection = sortDirection === "asc" ? "desc" : "asc";
        }

        setSortDirection(newSortDirection);
        setSortColumn(clickedColumn);

        const sortedData = sortingTable(employees, clickedColumn, newSortDirection);
        dispatch({ type: "CLEAR_EMPLOYEE" });
        sortedData.forEach((employee) => {
            dispatch({ type: "SET_EMPLOYEE", payload: employee });
        });
    };
    const getColumSortClass = (column) => {
        if (column === sortColumn) {
            return sortDirection === "asc" ? "shorting-up" : "shorting-down";
        }
        return "no-shorting";
    };
    return (
        <table {...getTableProps()} className="dataTable">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps({
                                onClick: () => handleSort(column),
                                className: `table-title ${getColumSortClass(column)}`})}>
                        <div className="collum-tile">
                                {column.render('Header')}
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {paginatedRows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.value}</td>;
                        })}
                    </tr>
                );})}
            </tbody>
        </table>
    );
}
export default TableComponent;

