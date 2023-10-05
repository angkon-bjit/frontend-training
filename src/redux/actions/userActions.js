export const addUserInfo = (userInfo) => {
  return {
    type: "ADD_USER",
    payload: userInfo,
  };
};
