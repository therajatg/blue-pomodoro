import styles from "./settings.module.css";

function Settings(prop) {
  return (
    <div className={prop.value ? styles.show : styles.hide}>
      <div>
        Focus: <input type="number" />
        mins
      </div>
      <div>
        Break: <input type="number" />
        mins
      </div>
    </div>
  );
}

export { Settings };
