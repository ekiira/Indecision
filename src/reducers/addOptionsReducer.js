const initialState = {
  suggestedOptions: [],
};

const decisonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUGGESTION':
      return {
        ...state,
        suggestedOptions: [...state.suggestedOptions, action.payload],
      };
    case 'REMOVE_SUGGESTION':
      return {
        ...state,
        suggestedOptions: state.suggestedOptions.filter((val) => val !== action.payload),
      };
    case 'REMOVE_ALL_SUGGESTION':
      return {
        ...state,
        suggestedOptions: [],
      };

    default:
      return state;
  }
};

export default decisonsReducer;
