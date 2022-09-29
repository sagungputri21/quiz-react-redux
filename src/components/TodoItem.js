import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/feature/todo/taskSlice";

const TodoItem = ({ id, todo, button }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <li className="flex justify-between py-[8px] md:px-[25px] px-[10px] md:gap-12 gap-8">
      <div className="flex items-center">
        <p className="max-w-sm">{todo}</p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-2">
        <button
          className="bg-red-800 h-[35px] text-white border-spacing-4 w-[70px] rounded-md hover:cursor-pointer"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
        {button}
      </div>
    </li>
  );
};

export default TodoItem;