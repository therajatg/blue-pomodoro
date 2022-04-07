import styles from "./tasks.module.css";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { StartTimerBtn } from "../../index";
import { useTask } from "../../../contexts/index";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

function Tasks(prop) {
  // const { tasks, setTasks } = useTask();
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const clickHandler = (input) => {
    // setTasks([
    //   ...tasks,
    //   { id: uuid(), todo: input, isDone: false, showEdit: false },
    // ]);
    console.log(input);
    // setInput("");
  };

  const isDoneHandler = (id) => {
    const newTaskList = tasks.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTasks(newTaskList);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => (item.id === id ? false : true)));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, showEdit: !item.showEdit } : item
      )
    );
  };

  // useEffect(() => {
  //   localStorage.setItem("taskArray", JSON.stringify(tasks));
  // }, [tasks]);

  return (
    <div className={prop.value ? styles.main : styles.hide}>
      <div className={styles.inputDiv}>
        <input
          value={input}
          onChange={(e) => inputHandler(e)}
          className={styles.inputTask}
        />
        <button onClick={clickHandler} className={styles.addTaskButton}>
          Add Task
        </button>
      </div>

      <StartTimerBtn />
    </div>
  );
}

export { Tasks };

// {tasks.map(({ id, todo, isDone, showEdit }) => (
//   <div className={styles.taskList} key={id}>
//     <div>
//       <input
//         type="checkbox"
//         id={id}
//         onChange={() => isDoneHandler(id)}
//         checked={isDone}
//       />
//       <label
//         htmlFor={id}
//         style={{ textDecoration: isDone ? "line-through" : "none" }}
//       >
//         {todo}
//       </label>
//     </div>
//     <div>
//       <GrEdit onClick={() => editTask(id)} />
//       <AiFillDelete onClick={() => deleteTask(id)} />
//     </div>
//   </div>
// ))}
