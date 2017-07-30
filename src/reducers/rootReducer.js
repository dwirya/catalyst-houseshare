

import { combineReducers } from 'redux';
import AllHousesReducer from './reducer_all_houses';

const rootReducer = combineReducers({
  houses: AllHousesReducer,
});

export default rootReducer;
