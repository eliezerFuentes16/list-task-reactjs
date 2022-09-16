import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css"
function TodoForm() {

    const { addTodos, setOpenModal } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState("");
    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodos(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')
    };


    return (
        <form onSubmit={onSubmit}>
            <label>Agrega una nueva Tarea</label>
            <textarea onChange={onChange} placeholder="Agregar una tarea" name="" id=""></textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">agregar</button>
            </div>
        </form>
    )

}

export { TodoForm }