const initialState = {
  suggestedOptions: []
}

const decisonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SUGGESTION':
      return {
        ...state,
      suggestedOptions: [ ...state.suggestedOptions, action.payload ] 
      };

      default:
        return state;
  }
}

export default decisonsReducer;