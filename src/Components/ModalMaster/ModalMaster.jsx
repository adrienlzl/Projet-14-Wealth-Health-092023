import React, { useEffect } from "react";
import $ from "jquery";
import "./modalJquery";
import "./ModalMaster.scss";

function ModalMaster({ closeModal }) {
    useEffect(() => {
        const openModal = () => {
            $("#myModal").modal({
                escapeClose: true,
                clickClose: true,
            });
        };
        openModal();
        $("#myModal").on("modal:close", () => {
            closeModal();
        });

        return () => {
            $("#myModal").off("modal:close");
        };
    }, [closeModal]);

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                Employee Created!
            </div>
        </div>
    );
}

export default ModalMaster;