import React from "react";
import "./PageSwitcher.scss"
function PageSwitcher({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const displayPageNumbers = () => {
        const displayedNumbers = [];

        if (totalPages <= 5) {
            return pageNumbers;
        }
        if (currentPage <= 3) {
            displayedNumbers.push(...pageNumbers.slice(0, 5), '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            displayedNumbers.push(1, '...', ...pageNumbers.slice(totalPages - 5, totalPages));
        } else {
            displayedNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }

        return displayedNumbers;
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className="page-switcher-container">
            <p className={`previous-switcher switcher-page ${currentPage === 1 ? 'button-disable' : ''}`}
               onClick={handlePreviousClick}>
                Previous
            </p>
            {displayPageNumbers().map((pageNumber, index) => (
                <p key={index}
                   className={`page-number ${currentPage === pageNumber ? 'actuel-page-number' : ''} ${pageNumber === '...' ? 'ect' : ''}`}
                   onClick={() => handlePageClick(pageNumber)}>
                    {pageNumber}
                </p>
            ))}
            <p className={`next-page switcher-page ${currentPage === totalPages ? 'button-disable' : ''}`}
               onClick={handleNextClick}>
                Next
            </p>
        </div>
    );
}

export default PageSwitcher;