export const addProduct = (text) => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};
