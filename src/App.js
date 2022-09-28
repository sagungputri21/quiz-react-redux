import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col items-center App shadow-lg shadow-blue-500/50 my-5 rounded-lg">
      <h1 className='mb-[30px] text-3xl text-blue-900 font-bold font-sans'>My Task Todo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
