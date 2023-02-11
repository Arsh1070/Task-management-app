import { createStore } from "redux";
import rootReducer from "../mainReducer/mainReducer";

const store = createStore(rootReducer);

export default store;
