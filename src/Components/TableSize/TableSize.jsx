import React, {useState} from "react";
import "./TableSize.scss"


function TableSize({onPageSizeChange}) {
    const [pageSize, setPageSize] = useState(10);

    const handlePageSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        setPageSize(newSize)
        onPageSizeChange(newSize);
    }

    return (
        <div className="table-size-contenaire">
            <p className="table-size-texte">Show </p>
            <select value={pageSize} onChange={handlePageSizeChange}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <p className="table-size-texte">entries</p>
        </div>
    )
}
export default TableSize