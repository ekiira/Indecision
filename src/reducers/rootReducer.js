import { combineReducers } from 'redux'
import decisionsReducer from './addOptionsReducer';

const rootReducer = combineReducers({
  decisionsReducer,
});

export default rootReducer;