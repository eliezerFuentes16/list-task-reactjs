import React, { useState } from "react";
import { useFilter } from "./useFilter";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const {
        arraySearch: todosSearch
    } = useFilter(todos, searchValue, "text", [searchValue]);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const addTodos = (text) => {
        let newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos);
    }
    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    return (
        < TodoContext.Provider value={{
            setSearchValue,
            loading,
            error,
            todosSearch,
            completedTodos,
            totalTodos,
            completeTodos,
            deleteTodos,
            searchValue,
            openModal,
            setOpenModal,
            addTodos
        }
        }>
            {props.children}
        </ TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };