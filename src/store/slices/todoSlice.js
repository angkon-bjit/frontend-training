import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const Slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        user: "Premium",
      });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = Slice.actions;

export default Slice.reducer;
