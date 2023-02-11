const initial = [{ tasktName: null, taskId: null, listId: null }];

const ReducerForTask = (state = initial, action) => {
  if (action.type === "undefined") {
    return state;
  }
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          taskName: action.payload.taskName,
          taskId: action.payload.taskId,
          listId: action.payload.listId,
          listName: action.payload.listName,
        },
      ];

    case "LIST_CHANGE":
      return state.map((item) => {
        if (item.taskId === action.payload.taskId) {
          item.listId = action.payload.listId;
        }
        return item;
      });

    case "SAVE_TASK":
      return state.map((item) => {
        if (item.taskId === action.payload.taskId) {
          item.taskName = action.payload.taskName;
        }
        return item;
      });

    case "DELETE_TASK":
      return state.filter((item) => item.taskId !== action.payload.taskId);

    default:
      return [...state];
  }
};

export const TaskReducer = {
  taskData: ReducerForTask,
};
