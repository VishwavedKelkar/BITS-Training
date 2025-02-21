import React, { createContext, ReactNode, useReducer, useMemo, useCallback } from "react";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

type Action = { type: "ADD_TASK"; payload: string } | { type: "REMOVE_TASK"; payload: number } | { type: "TOGGLE_TASK"; payload: number };

const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), task: action.payload, completed: false }];

    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
  }
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = useCallback((task: string) => {
    dispatch({ type: "ADD_TASK", payload: task });
  }, []);

  const removeTask = useCallback((id: number) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  }, []);

  const toggleTask = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  const completedTaskCount = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      <div>
      <p>Total Completed Tasks: {completedTaskCount}</p>
        {children}
      </div>
    </TaskContext.Provider>
  );
};
