const initialState = {
  productsList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("Products is calling ");
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        productsList: state.productsList.filter(
          (task) => task.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
