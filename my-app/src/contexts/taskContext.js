import { createContext, useContext, useState, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

const taskContext = createContext();
const useTask = () => useContext(taskContext);
const tasksFromLocalStorage = localStorage.getItem("savedTasks")
  ? JSON.parse(localStorage.getItem("savedTasks"))
  : [];

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: tasksFromLocalStorage,
    timer: { focus: null, break: null },
  });

  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
}

export { useTask, TaskProvider };
