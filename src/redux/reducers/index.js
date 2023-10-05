import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import productReducer from "./productReducer";
import booksReducer from "./bookReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  products: productReducer,
  books: booksReducer,
  users: userReducer,
});

export default rootReducer;
