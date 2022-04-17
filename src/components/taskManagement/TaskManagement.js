import { Tasks, Settings } from "../index";
import { useState } from "react";
import styles from "./taskManagement.module.css";

function TaskManagement() {
  const [display, setDisplay] = useState({ tasks: true, settings: false });

  return (
    <div>
      <button
        onClick={() => setDisplay({ tasks: true, settings: false })}
        className={display.tasks ? styles.isActive : styles.notActive}
      >
        Tasks
      </button>
      <button
        onClick={() => setDisplay({ tasks: false, settings: true })}
        className={display.settings ? styles.isActive : styles.notActive}
      >
        Settings
      </button>
      <Tasks value={display.tasks} />
      <Settings value={display.settings} />
    </div>
  );
}

export { TaskManagement };
