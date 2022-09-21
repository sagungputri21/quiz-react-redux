import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/feature/taskSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="m-[30px]">
			<input
				type="text"
				className="h-11 w-[300px] border border-blue-200 border-solid py-1 px-[10px] mr-2.5"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button 
                className="h-[49px] w-[100px] bg-[#05386b] text-white hoverpointer-events-auto"
                onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddTodo;