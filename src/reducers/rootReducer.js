

import { combineReducers } from 'redux';
import AllHousesReducer from './reducer_all_houses';
import ConcessionReducer from './reducer_get_concession.js'

const rootReducer = combineReducers({
  houses: AllHousesReducer,
  concession: ConcessionReducer
});

export default rootReducer;
