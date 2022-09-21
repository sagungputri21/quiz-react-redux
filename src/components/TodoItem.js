import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from '../redux/feature/taskSlice';

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
		<li className="flex justify-between py-[8px] px-[40px]">
			<div>
				{title}
			</div>
			<div>
				<button className="bg-red-800 h-[32px] text-white border-spacing-4 w-[70px] hover:cursor-pointer" 
                    onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;