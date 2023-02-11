const initial = [{ listName: null, listId: null }];

const ReducerForList = (state = initial, action) => {
  if (action.type === "undefined") {
    return state;
  }
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          listName: action.payload.listName,
          listId: action.payload.listId,
        },
      ];

    case "DELETE_LISTS":
      return initial;

    default:
      return [...state];
  }
};

export const ListReducer = {
  listData: ReducerForList,
};
