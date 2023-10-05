const initialState = {
  userId: "",
  userName: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  console.log("User payload ", action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        userId: action.payload.userId,
        email: action.payload.email,
        userName: action.payload.username,
      };

    default:
      return state;
  }
};

export default userReducer;
