export function sortingTable(data, sortColumn, sortDirection) {
    const employeeToSort = [...data];

    employeeToSort.sort((a, b) => {
        const valueA = sortColumn.accessor(a);
        const valueB = sortColumn.accessor(b);
        if (sortDirection === "asc") {
            return valueA > valueB ? 1 : -1;
        } else if (sortDirection === "desc") {
            return valueA < valueB ? 1 : -1;
        }

        return 0;
    });
    return employeeToSort;
}

