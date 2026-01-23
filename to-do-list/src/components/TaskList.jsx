import TaskItem from "./TaskItem";

export default function TaskList({tasks, toggleTask, deleteTask, editTask}){

    return(
        <ul style={{paddingLeft:"0px", listStyle:"none",width:"40%"}}>
            {tasks.map((task) =>(
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </ul>
    )
}