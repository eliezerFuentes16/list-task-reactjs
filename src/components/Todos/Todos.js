import React, { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";

// hooks en react, useState, useContext, useEffect, CustomsHooks
function Index() {
    const { loading, error, todosSearch, completeTodos, deleteTodos, openModal } = useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {!loading && <p>Cargando espere...</p>}
                {error && <p>Ah ocurrido un error</p>}
                {
                    todosSearch.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodos(todo.text)} onDelete={() => deleteTodos(todo.text)} />
                    ))
                }
            </TodoList>
            {openModal &&
                (<Modal><TodoForm></TodoForm></Modal>)

            }
            <CreateTodoButton />

        </React.Fragment>
    )

}

export { Index };