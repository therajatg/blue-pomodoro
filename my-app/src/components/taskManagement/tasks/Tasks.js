import styles from "./tasks.module.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
// import { InputTask, TaskList } from "../index";
// import { useTask } from "../../contexts/index";
// import { GrEdit } from "react-icons/gr";
// import { AiFillDelete } from "react-icons/ai";
// import { useEffect } from "react";
// import { FaUserInjured } from "react-icons/fa";

function Tasks(prop) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const changeHandler = (e) => setInput(e.target.value);
  const clickHandler = () => {
    setTasks([...tasks, { id: uuid(), todo: input, isDone: false }]);
    setInput("");
  };

  const isDoneHandler = (id) => {
    const newTaskList = tasks.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTasks(newTaskList);
    console.log("clicked");
  };

  return (
    <div className={prop.value ? styles.main : styles.hide}>
      {prop.name}
      <input type="text" value={input} onChange={(e) => changeHandler(e)} />
      <button onClick={clickHandler}>Add Task</button>

      {tasks.map(({ id, todo, isDone }) => (
        <div
          key={id}
          onClick={() => isDoneHandler(id)}
          style={{ color: isDone ? "red" : "blue" }}
        >
          {todo}
        </div>
      ))}

      <button className={styles.startTimerBtn}>Start Focusing</button>
    </div>
  );
}

export { Tasks };
