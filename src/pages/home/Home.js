import { WelcomeMsg, TaskManagement, Timer } from "../../components/index";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <WelcomeMsg />
      <Timer className={styles.timer} />
      <TaskManagement />
    </div>
  );
}

export { Home };
