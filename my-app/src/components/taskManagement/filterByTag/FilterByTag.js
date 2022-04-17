import { useState } from "react";
import { useTask } from "../../../contexts/index";

function FilterByTag() {
  const { state, dispatch } = useTask();
  const { tasks } = state;
  // const [input, setInput] = useState("");

  // let allTagList = [];

  // for (let i = 0; i < tasks.length; i++) {
  //   const arr = tasks[i].tagList.map((tagObject) => tagObject.tag);
  //   allTagList = [...allTagList, ...arr];
  // }

  // console.log(allTagList);

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: "FILTER_BY_TAG", payload: e.target.value })
        }
      >
        <option>Filter by tag</option>
        {tasks.map(
          ({ tagList }) =>
            tagList[0] !== undefined &&
            tagList.map((item) => <option value={item.tag}>{item.tag}</option>)
        )}
      </select>
      {/* <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => dispatch({ type: "FILTER_BY_TAG", payload: input })}
      >
        Filter By Tag
      </button> */}
    </div>
  );
}

export { FilterByTag };
