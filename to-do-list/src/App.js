import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import SearchBar from './components/SearchBar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import "./components/styles.css";

function App() {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const addTask = () => {
    const cleanText = task.trim();
    if(!cleanText) return;
    const newTask = {
      id: Date.now(),
      text: cleanText,
      completed : false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) =>{
    setTasks((prev) => prev.map((task)=> (task.id === id ? {...task, completed : !task.completed} : task)));
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  const filteredTasks = tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='app-container'style={{
      background : theme === "dark" ? "#111" : "#f3f4f6",
      color : theme === "dark" ? "white" : "black"
    }}>
      <h1 className='title'>To Do List</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      {filteredTasks.length === 0 && (
        <p className="error-message">No Tasks Found !</p>
      )}

      <button onClick={toggleTheme}>
          Switch to { theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );

}

export default App;
