import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = ({ button }) => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
	  <div>
		<hr className='border-1 border-blue-200' />
		<ul className="tasks-list mt-7 flex flex-col gap-4">
			{todos.map((todo) => (
				<TodoItem id={todo.id} todo={todo.name} button={button}/>
			))}
		</ul>
	  </div>
	);
};

export default TodoList;