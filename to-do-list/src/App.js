import { useState } from 'react';
import  SearchBar  from './components/SearchBar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id : Date.now(),
      text : task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const filteredTasks = tasks.filter((t)=> t.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>To Do App</h1>
      <SearchBar search={search} setSearch={setSearch}/>
      <TaskInput task={task} setTask={setTask} addTask={addTask}/>
      <TaskList tasks={filteredTasks}/>
    </div>
  );

}

export default App;
