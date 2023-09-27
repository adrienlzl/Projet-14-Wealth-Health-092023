import React from "react";
import "./NumberEntries.scss"

function NumberEntries({ firstDisplayedRow, lastDisplayedRow, totalEntries}) {

    return (
        <div className="number-entries-contenaire">
            <p className="number-entries-texte">
                Showing {firstDisplayedRow} to {lastDisplayedRow} of {totalEntries} entries
            </p>
        </div>
    );
}

export default NumberEntries;