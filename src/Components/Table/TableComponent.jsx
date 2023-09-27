import React from "react";
import "./Table.scss"
import { useTable, useSortBy  } from 'react-table';
import SortingTriangle from "../SortingTriangle/SortingTriangle";

function TableComponent({ data, columns, tableSIze }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    }, useSortBy);

    if (!data || data.length === 0) {
        return <p>Aucune donnée à afficher.</p>;
    }
    const paginatedRows = rows.slice(0, tableSize);

    return (
        <table {...getTableProps()} className="table">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            <div>
                                {column.render('Header')}
                                <SortingTriangle />
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
                );
            })}
            </tbody>
        </table>
    );
}

export default TableComponent;