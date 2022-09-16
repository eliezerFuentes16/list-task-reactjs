import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onChangeSearchTodo = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <React.Fragment>
            <div>
                <div className="div-checkbox">
                    <label >Completados</label>
                    <br />
                    <label class="toggler-wrapper style-1">
                        <input type="checkbox" />
                        <div class="toggler-slider">
                            <div class="toggler-knob"></div>
                        </div>
                    </label>

                </div>
            </div>

            <input type="search" onChange={onChangeSearchTodo} value={searchValue} placeholder="Buscar Tarea" className="input-search-todo" />
        </React.Fragment>
    )
}

export { TodoSearch };