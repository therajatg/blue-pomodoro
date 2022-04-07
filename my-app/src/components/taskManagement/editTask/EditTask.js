import styles from "./editTask.module.css";
import { useTask } from "../../../contexts/index";
import { useState } from "react";

function EditTask(props) {
  const { tasks, setTasks } = useTask();

  const [input, setInput] = useState("");

  const updateHandler = () => {
    if (input !== "") {
      setTasks(
        tasks.map((item) =>
          item.id === props.currentTask.id
            ? { ...item, todo: input, showEdit: !item.showEdit }
            : item
        )
      );
      props.editTask(props.currentTask.id);
    }
  };

  return (
    <div className={props.currentTask.showEdit ? styles.show : styles.hide}>
      <input
        defaultValue={props.currentTask.todo}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={updateHandler}>Update</button>
    </div>
  );
}

export { EditTask };
