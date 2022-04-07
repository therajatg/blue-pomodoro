import { Tasks, Settings } from "../index";
import { useState } from "react";
import styles from "./taskManagement.module.css";

function TaskManagement() {
  const [display, setDisplay] = useState({ tasks: true, settings: false });

  return (
    <div>
      <button
        onClick={() => setDisplay({ tasks: true, settings: false })}
        className={styles.taskButton}
      >
        Tasks
      </button>
      <button
        onClick={() => setDisplay({ tasks: false, settings: true })}
        className={styles.settingsButton}
      >
        Settings
      </button>
      <Tasks value={display.tasks} />
      <Settings value={display.settings} />
    </div>
  );
}

export { TaskManagement };
