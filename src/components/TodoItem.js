import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from '../redux/feature/todo/taskSlice';

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<li className="flex justify-between py-[8px] px-[25px] gap-12">
			<div className=''>
			  <p className='max-w-sm'>
				{title}
			  </p>
			</div>
			<div className='flex flex-row gap-3'>
				<button className="bg-red-800 h-[32px] text-white border-spacing-4 w-[70px] hover:cursor-pointer" 
                    onClick={()=>{
					removeTask();
				}}>Delete</button>
				<button className="border border-indigo-500 h-[32px] border-spacing-4 w-[70px] hover:cursor-pointer" 
                    onClick={()=>{
					removeTask();
				}}>Edit</button>
			</div>
		</li>
	);
};

export default TodoItem;