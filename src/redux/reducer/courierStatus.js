const initStatus = {
  statusFlag: '',
};

export const courierStatusReducer = (state = initStatus, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        statusFlag: action.value,
      };
    default:
      return state;
  }
};
