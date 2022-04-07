const taskReducer = (state, action) => {
  switch (action.type) {
    case "TASK":
      return { ...state, taskArray: [...state.taskArray, action.payload] };
  }
};
