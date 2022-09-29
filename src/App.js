import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditModal from './components/modal/EditModal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center App shadow-lg shadow-blue-500/50 my-5 rounded-lg">
      <h1 className='mb-[30px] text-3xl text-blue-900 font-bold font-sans'>My Task Todo</h1>
      <AddTodo />
      <TodoList 
        button={
          <button
            className="border border-indigo-500 h-[35px] border-spacing-4 w-[70px] hover:cursor-pointer rounded-md"
            onClick={() => setShow(true)}
          >
            Edit
          </button>
        }
      />
      <EditModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
