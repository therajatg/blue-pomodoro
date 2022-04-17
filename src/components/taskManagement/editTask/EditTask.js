import styles from "./editTask.module.css";
import { useTask } from "../../../contexts/index";
import { useState } from "react";

function EditTask(prop) {
  const [input, setInput] = useState("");
  const { state, dispatch } = useTask();
  const { tasks } = state;
  const task = tasks.find((item) => item.id === prop.id);

  return (
    <div className={task.isEdit ? styles.show : styles.hide}>
      <input
        defaultValue={task.todo}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className={styles.editText}
      />
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE",
            payload: { id: task.id, todo: input },
          })
        }
      >
        Update
      </button>
    </div>
  );
}

export { EditTask };
