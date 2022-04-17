import { v4 as uuid } from "uuid";

function taskReducer(state, action) {
  switch (action.type) {
    case "NEW_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "IS_DONE":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    case "EDIT":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload ? { ...item, isEdit: !item.isEdit } : item
        ),
      };
    case "UPDATE":
      console.log(action.payload.todo);
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                todo:
                  action.payload.todo === "" ? item.todo : action.payload.todo,
                isEdit: !item.isEdit,
              }
            : item
        ),
      };

    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) =>
          item.id === action.payload ? false : true
        ),
      };
    case "ADD_TAG":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload ? { ...item, isTag: !item.isTag } : item
        ),
      };
    case "ADD_TO_TAG_LIST":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                isTag: !item.isTag,
                tagList: [
                  ...item.tagList,
                  { tag: action.payload.tag, tagId: uuid() },
                ],
              }
            : item
        ),
      };
    case "DELETE_TAG":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                tagList: item.tagList.filter((tag) =>
                  tag.tagId === action.payload.tagId ? false : true
                ),
              }
            : item
        ),
      };

    case "FILTER_BY_TAG":
      if (action.payload === "seeAll") {
        return {
          ...state,
          tasks: state.tasks.map((task) => ({ ...task, isFilter: true })),
        };
      } else {
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.tagList.find((item) => item.tag === action.payload)
              ? { ...task, isFilter: true }
              : { ...task, isFilter: false }
          ),
        };
      }

    case "TIMER":
      return {
        ...state,
        timer: {
          ...state.timer,
          focus: action.payload.focus,
          break: action.payload.break,
        },
      };
    default:
      return state;
  }
}

export { taskReducer };
