import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";
function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext);
    return (
        <React.Fragment>
            <h2 className="title">Has completado {completedTodos} de {totalTodos} tareas</h2>
        </React.Fragment>
    )
}

export { TodoCounter };