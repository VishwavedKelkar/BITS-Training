import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks, addTask, removeTask, toggleTask } = useContext(TaskContext) || {};
  const [taskInput, setTaskInput] = useState<string>("");

  if (!tasks) return <p>Loading...</p>;

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter the task..."
      />
      <button onClick={() => { 
        addTask && addTask(taskInput);
        setTaskInput(""); 
        }}
        >
        Add Task
      </button>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.task}
            <button onClick={() => toggleTask && toggleTask(task.id)}>Toggle</button>
            <button onClick={() => removeTask && removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
