import { useState } from "react";
import { useTask } from "../../../contexts/index";

function AddTag(prop) {
  const { dispatch } = useTask();
  const [input, setInput] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_TAG_LIST",
            payload: { id: prop.id, tag: input },
          })
        }
      >
        add
      </button>
    </div>
  );
}

export { AddTag };
