import { Tasks, Settings } from "../index";
import { useState } from "react";

function TaskManagement() {
  const [display, setDisplay] = useState({ tasks: true, settings: false });

  return (
    <div>
      <button onClick={() => setDisplay({ tasks: true, settings: false })}>
        Tasks
      </button>
      <button onClick={() => setDisplay({ tasks: false, settings: true })}>
        Settings
      </button>
      <Tasks value={display.tasks} />
      <Settings value={display.settings} />
    </div>
  );
}

export { TaskManagement };
