import React, { useRef } from 'react';
import "./ModalMaster.scss";

const ModalMaster = ({isOpen, onClose, onExternalClick, children}) => {
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const modalRef = useRef(null);

    const handleClose = () => {
        if (typeof onClose !== 'function') {
            return ;
        }

        onClose();
    }

    const handleExternalClick = e => {
        if(e.target === paragraphRef.current || e.target === buttonRef.current) {
            return;
        }

        if (typeof onExternalClick !== 'function') {
            return ;
        }

        onExternalClick();
    }

    return (
        <>
            {isOpen && (
                <div onClick={handleExternalClick} className="jquery-modal blocker current">
                    <div id="confirmation" className="modal" style={{ display: 'inline-block' }} ref={modalRef}>
                        Employee Created!
                        <a href="#close-modal" rel="modal:close" className="close-modal" onClick={handleClose}>Close</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalMaster;