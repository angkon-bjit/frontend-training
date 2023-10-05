const initialState = {
  tasksList: [],
  tasksCompleted: false,
  authenticated: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
