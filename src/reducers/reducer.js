export const resultReducer = (state, action) => {
  switch (action.type) {
    case 'RESULT':
      return {
        ...state,
        score: action.payload.score,
      };

    default:
      return state;
  }
};
