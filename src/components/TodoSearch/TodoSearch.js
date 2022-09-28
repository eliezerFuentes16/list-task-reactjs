import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
	const { searchValue, setSearchValue } = useContext(TodoContext);
	const onChangeSearchTodo = (event) => {
		setSearchValue(event.target.value);
	};
	return (
		<React.Fragment>
			<input
				type='search'
				onChange={onChangeSearchTodo}
				value={searchValue}
				placeholder='Buscar Tarea'
				className='input-search-todo'
			/>
		</React.Fragment>
	);
}

export { TodoSearch };
