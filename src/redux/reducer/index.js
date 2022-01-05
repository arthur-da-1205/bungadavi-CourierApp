import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {courierAssignReducer} from './courierAssign';
import {courierStatusReducer} from './courierStatus';

const reducer = combineReducers({
  globalReducer,
  courierAssignReducer,
  courierStatusReducer,
});

export default reducer;
