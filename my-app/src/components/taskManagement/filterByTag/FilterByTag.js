import { useState } from "react";
import { useTask } from "../../../contexts/index";

function FilterByTag() {
  const { state, dispatch } = useTask();
  const { tasks } = state;

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: "FILTER_BY_TAG", payload: e.target.value })
        }
      >
        <option value="seeAll">Filter by tag (See All)</option>
        {tasks.map(
          ({ tagList }) =>
            tagList[0] !== undefined &&
            tagList.map((item) => <option value={item.tag}>{item.tag}</option>)
        )}
      </select>
    </div>
  );
}

export { FilterByTag };
