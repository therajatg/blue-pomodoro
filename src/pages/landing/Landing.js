import styles from "./landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p className={styles.welcome}>
          Welcome to <span className={styles.name}>Blue Pomodoro</span>
        </p>
        <span className={styles.pendingTask}>
          A simple app designed to beat procrastination and help you accomplish
          more
        </span>
        <Link to="/home">
          <button className={styles.getStarted}>Get Started</button>
        </Link>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/therajatg/image/upload/v1649271363/pomodoro/1_n7o7hi.svg"
          alt="heroImage"
        />
      </div>
    </div>
  );
}

export { Landing };
