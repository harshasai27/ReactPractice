export default  function TaskInput({task, setTask, addTask}){

    return(
        <div className="task-input-section">
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e)=> setTask(e.target.value)}
                className="task-input-box"
            />

            <button
                className="task-input-button"
                onClick={addTask}
            >Add Task</button>
        </div>
    )
}