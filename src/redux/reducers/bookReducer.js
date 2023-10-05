const initialState = {
  booksList: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("Products is calling ");
      return {
        ...state,
        booksList: [...state.booksList, action.payload],
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        booksList: state.booksList.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default booksReducer;
