import styles from "./settings.module.css";
import { StartTimerButton } from "../../index";
import { useTask } from "../../../contexts/index";
import { useState } from "react";

function Settings(prop) {
  const { state, dispatch } = useTask();
  const [timer, setTimer] = useState({});
  return (
    <div className={prop.value ? styles.show : styles.hide}>
      <div className={styles.main}>
        <div className={styles.setTime}>
          <div>
            Focus:{" "}
            <input
              type="number"
              className={styles.input}
              onChange={(e) =>
                setTimer({ ...timer, focus: Number(e.target.value) })
              }
            />
            mins
          </div>
          <div>
            Break:{" "}
            <input
              type="number"
              className={styles.input}
              onChange={(e) =>
                setTimer({ ...timer, break: Number(e.target.value) })
              }
            />
            mins
          </div>
        </div>

        <StartTimerButton timer={timer} />
      </div>
    </div>
  );
}

export { Settings };
