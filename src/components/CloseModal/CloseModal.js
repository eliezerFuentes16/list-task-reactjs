import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./CloseModal.css";
function CloseModal() {
    const { setOpenModal } = useContext(TodoContext);
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <span className="closeModal" onClick={closeModal}>&times;</span>
    );
}

export { CloseModal };