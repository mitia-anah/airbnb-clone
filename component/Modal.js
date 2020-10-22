import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "../component/SearchForm"

function Modal(props) {
    const { show, closeModal } = props;
    const modal = (<>
        <div className={show ? "overlay" : "hide"} />
        <div className={show ? "modal" : "hide"}>
            <button onClick={closeModal}>X</button>
            <SearchForm />
        </div>
    </>)
    return ReactDOM.createPortal(
        modal, document.getElementById("modal-root")
    );
}
export default Modal