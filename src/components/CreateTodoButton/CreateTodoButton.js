import React, { useContext } from "react";
import "./CreateButton.css";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton() {
    const { setOpenModal, openModal } = useContext(TodoContext);

    const onClickButton = () => {

        setOpenModal(true);

    };
    return (
        <button onClick={onClickButton} className="CreateTodoButton">+</button>
    )

}

export { CreateTodoButton };