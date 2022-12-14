import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/feature/todo/taskSlice";
import { useSelector } from "react-redux";

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	console.log(value);

	const taskAmount = useSelector((state) => state.tasks.length);

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				id: taskAmount + 1,
				name: value
			})
		);

		setValue("");
	};

	return (
		<div className="m-[30px] flex flex-row flex-wrap justify-center mx-auto gap-3">
			<input
				type="text"
				className="h-11 w-[300px] border border-blue-200 border-solid py-1 px-[10px] rounded-md"
				placeholder="type your task here ..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button 
                className="flex justify-center mx-auto h-[49px] w-[100px] bg-[#05386b] text-white hoverpointer-events-auto items-center rounded-md"
                onClick={onSubmit}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;