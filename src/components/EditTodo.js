import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editTask } from '../redux/feature/todo/taskSlice';
import { useSelector } from "react-redux";

const EditTodo = ({onClick}) => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	console.log(value);

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}
		dispatch(
			editTask({
				name: value
			})
		);

		setValue("");
	};

	return (
		<div className="m-[30px] flex flex-col justify-center mx-auto gap-3">
            <p className='text-start'>ketikan todo yang baru</p>
			<input
				type="text"
				className="h-11 w-[300px] border border-blue-200 border-solid py-1 px-[10px] rounded-md"
				placeholder="type your task here ..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
            <div className='edit-button flex mx-auto gap-2 justify-end items-end right-0 mt-7'>
            <button 
                className="mx-auto h-[40px] w-[80px] bg-[#05386b] text-white items-center rounded-lg"
                onClick={onSubmit}>
				Save
			</button>
            <button onClick={onClick} className="rounded-lg border border-blue-800 h-[40px] w-[80px] text-blue-800">
                Close
            </button>
          </div>
		</div>
	);
};

export default EditTodo;