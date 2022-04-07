import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/index";

const taskContext = createContext();
const useTask = () => useContext(taskContext);
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("taskArray"));

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    taskArray: tasksFromLocalStorage ? tasksFromLocalStorage : [],
  });
  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
}

export { useTask, TaskProvider };
