import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
	  <div className>
		<hr className='border-1 border-blue-200' />
		<ul className="tasks-list mt-7">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name}/>
			))}
		</ul>
	  </div>
	);
};

export default TodoList;