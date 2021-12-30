const initAssign = {
  task: [],
};

export const courierAssignReducer = (state = initAssign, action) => {
  switch (action.type) {
    case 'SET_ASSIGN':
      return {
        ...state,
        task: action.value,
      };
    default:
      return state;
  }
};
