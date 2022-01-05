const initAssign = {
  task: [],
};

export const courierAssignReducer = (state = initAssign, action) => {
  if (action.type === 'SET_ASSIGN') {
    return {
      ...state,
      task: action.value,
    };
  }
  return state;
};
