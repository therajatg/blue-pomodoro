import styles from "./tasks.module.css";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { StartTimerButton, EditTask, AddTag } from "../../index";
import { useTask } from "../../../contexts/index";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

function Tasks(prop) {
  const [input, setInput] = useState("");
  const { state, dispatch } = useTask();
  const { tasks } = state;

  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const changeHandler = (e) => setInput(e.target.value);
  console.log(typeof tasks[1].tagList);
  console.log(typeof tasks);

  return (
    <div className={prop.value ? styles.main : styles.hide}>
      <div className={styles.inputDiv}>
        <input
          value={input}
          onChange={(e) => changeHandler(e)}
          className={styles.inputTask}
        ></input>
        <button
          onClick={() => {
            if (input !== "") {
              dispatch({
                type: "NEW_TASK",
                payload: {
                  todo: input,
                  id: uuid(),
                  isDone: false,
                  isEdit: false,
                  isTag: false,
                  tagList: [],
                },
              });
            }
            setInput("");
          }}
          className={styles.addTaskButton}
        >
          Add
        </button>
      </div>
      <div className={styles.taskList}>
        {tasks.map(({ id, todo, isDone, isEdit, isTag, tagList }) => (
          <div className={styles.singleTask} key={id}>
            {isEdit && (
              <div>
                <EditTask id={id} />
              </div>
            )}
            {!isEdit && (
              <div>
                <input
                  type="checkbox"
                  id={id}
                  onChange={() => dispatch({ type: "IS_DONE", payload: id })}
                  checked={isDone}
                />
                <label
                  htmlFor={id}
                  style={{ textDecoration: isDone ? "line-through" : "none" }}
                >
                  {todo}
                </label>
                <div className={styles.allTags}>
                  {tagList.map((item) => (
                    <div className={styles.tag} key={item.tagId}>
                      <MdCancel
                        onClick={() =>
                          dispatch({
                            type: "DELETE_TAG",
                            payload: { id: id, tagId: item.tagId },
                          })
                        }
                      />
                      {item.tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isTag && <AddTag id={id} />}

            {!isTag && (
              <div className={styles.updateItem}>
                <GrEdit
                  onClick={() => dispatch({ type: "EDIT", payload: id })}
                />
                <AiFillDelete
                  onClick={() => {
                    dispatch({ type: "DELETE", payload: id });
                  }}
                />
                <button
                  className={styles.addTag}
                  onClick={() => dispatch({ type: "ADD_TAG", payload: id })}
                >
                  add tag
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <StartTimerButton />
    </div>
  );
}

export { Tasks };
