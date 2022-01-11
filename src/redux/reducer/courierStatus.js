const initStatus = {
  statusFlag: '',
};

export const courierStatusReducer = (state = initStatus, action) => {
  if (action.type === 'SET_STATUS') {
    return {
      ...state,
      statusFlag: action.value,
    };
  }
  return state;
};
