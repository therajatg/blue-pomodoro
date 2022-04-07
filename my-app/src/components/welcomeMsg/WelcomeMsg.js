import { useTask } from "../../contexts/index";
import styles from "./welcomeMsg.module.css";

function WelcomeMsg() {
  const { tasks } = useTask();
  return (
    <div>
      <p className={styles.welcome}>
        Hi, <span className={styles.name}>Rajat</span>
      </p>
      <span className={styles.pendingTask}>
        Pending Tasks: {tasks.filter((item) => item.isDone === true).length}
      </span>
    </div>
  );
}

export { WelcomeMsg };
