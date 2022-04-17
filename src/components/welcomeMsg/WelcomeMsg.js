import { useTask } from "../../contexts/index";
import styles from "./welcomeMsg.module.css";

function WelcomeMsg() {
  const { state } = useTask();
  const { tasks } = state;
  return (
    <div>
      <p className={styles.welcome}>
        Hi, <span className={styles.name}>Rajat</span>
      </p>
      <span className={styles.pendingTask}>
        Pending Tasks: {tasks.filter((item) => item.isDone === false).length}
      </span>
    </div>
  );
}

export { WelcomeMsg };
