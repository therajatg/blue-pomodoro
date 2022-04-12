import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./timer.module.css";
import { useTask } from "../../contexts/index";
import { useState } from "react";

function Timer() {
  const { state } = useTask();
  const { timer } = state;

  const [isFocus, setIsFocus] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [reStart, setreStart] = useState(false);

  const renderTime = ({ remainingTime }) => {
    const addZero = (num) => (num < 10 ? "0" + num : num);
    const minutes = addZero(Math.floor(remainingTime / 60));
    const seconds = addZero(remainingTime % 60);

    return (
      <div className={styles.timer}>
        {isFocus && <div className={styles.text}>Focus</div>}
        {isBreak && <div className={styles.text}>Break</div>}
        <div className={styles.value}>{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  return (
    <div className={styles.timerWrapper}>
      {isFocus && (
        <CountdownCircleTimer
          isPlaying
          duration={timer.focus * 60}
          size={350}
          colors={["#1877f2"]}
          onComplete={() => {
            setIsFocus(false);
            setIsBreak(true);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}

      {isBreak && (
        <CountdownCircleTimer
          isPlaying
          duration={timer.break * 60}
          size={350}
          colors={["#1877f2"]}
          onComplete={() => {
            setIsBreak(false);
            setIsFocus(true);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
}

export { Timer };
