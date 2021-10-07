import React, { useState } from 'react'



const Todo = ({toggleTodo,task,completed, id, removeTodo, updateTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdate = (e) => {
       e.preventDefault();
       updateTodo(id, editTask);
       setIsEditing(false)
    }
    return (
        <div>
        {isEditing ? (
            <div>
            <form onSubmit={handleUpdate}>
      <input
        id="task"
        type="text"
        name="task"
        value={editTask}
        onChange={(e) => setEditTask(e.target.value)}
      />
      <button>Save</button>
    </form>
            </div>
        ) : (
            <div>
                <li onClick={toggleTodo}>
                   {task}
                </li>
            </div>
        )}
            
            <div>
            <button onClick={() => setIsEditing(true)}><i className="fas fa-pen"/></button>

                <button onClick={removeTodo}><i className="fas fa-trash"/></button>
            </div>
        </div>
    )
}

export default Todo
