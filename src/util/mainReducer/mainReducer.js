import { combineReducers } from "redux";
import { ListReducer } from "../../components/list/logic";
import { TaskReducer } from "../../components/tasks/logic";

export default combineReducers({
  ...ListReducer,
  ...TaskReducer,
});
