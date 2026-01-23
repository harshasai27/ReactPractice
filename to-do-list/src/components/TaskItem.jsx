import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleSave = () => {
        editTask(task.id, editedText);
        setIsEditing(false);
    }

    return (
        <li className="task-item-list">
            <div className="task-item">
                <input type="checkbox"
                className="task-item-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />

                {isEditing ? (
                    <input
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                ) :
                    (
                        <p className="task-name" style={{textDecoration : task.completed ? "line-through" : "none"}}>{task.text}</p>
                    )}
            </div>

            <div className="task-item-button-row">
                {isEditing ? (
                    <button className="task-item-button-save" onClick={handleSave}>Save</button>
                ) : (
                    <button className="task-item-button-edit" onClick={() => setIsEditing(true)}>Edit</button>
                )
                }

                <button className="task-item-button-delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    )

}