import styles from "./startTimerButton.module.css";
import { useTask } from "../../../contexts/index";
import { Link } from "react-router-dom";

function StartTimerButton(prop) {
  console.log(prop);
  const { state, dispatch } = useTask();
  return (
    <button
      className={styles.startTimerButton}
      onClick={() =>
        dispatch({
          type: "TIMER",
          payload: {
            focus: prop.timer.focus,
            break: prop.timer.break,
          },
        })
      }
    >
      Start Focusing
    </button>
  );
}

export { StartTimerButton };
