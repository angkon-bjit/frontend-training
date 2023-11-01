import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  userId: "",
  email: "",
  boughtBooks: [],
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.username = action.payload.username;
    },

    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addUserInfo, deleteUserInfo } = userSlice.actions;

export default userSlice.reducer;
