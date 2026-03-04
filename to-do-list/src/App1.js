import { useReducer, useState , useContext} from "react";
import { todoReducer, initialState } from "./reducer/toDoReducer";
import { ThemeContext } from "./context/ThemeContext";

import SearchBar from "./components/SearchBar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./components/styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [tasks, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTask = () => {
    dispatch({ type: "ADD_TASK", payload: taskInput });
    setTaskInput("");
  };

  const handleToggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleEditTask = (id, text) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id, text },
    });
  };

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className='app-container'style={{
        background : theme === "dark" ? "#111" : "#f3f4f6",
        color : theme === "dark" ? "white" : "black"
      }}>
        <h1 className='title'>To Do List</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <TaskInput task={taskInput} setTask={setTaskInput} addTask={handleAddTask} />
        <TaskList tasks={filteredTasks}
          toggleTask={handleToggleTask}
          deleteTask={handleDeleteTask}
          editTask={handleEditTask}
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