import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
});

export default store;
