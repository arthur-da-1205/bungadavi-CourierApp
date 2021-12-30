import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {courierAssignReducer} from './courierAssign';

const reducer = combineReducers({
  globalReducer,
  courierAssignReducer,
});

export default reducer;
