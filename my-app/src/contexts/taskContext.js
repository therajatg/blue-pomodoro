import { createContext, useContext, useState } from "react";

const taskContext = createContext();
const useTask = () => useContext(taskContext);
const tasksFromLocalStorage = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(tasksFromLocalStorage);
  return (
    <taskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </taskContext.Provider>
  );
}

export { useTask, TaskProvider };
