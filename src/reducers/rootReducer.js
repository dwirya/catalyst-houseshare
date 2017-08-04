

import { combineReducers } from 'redux';
import AllHousesReducer from './reducer_all_houses';
import ConcessionReducer from './reducer_get_concession.js';
import SelectedHouseReducer from './reducer_select_house.js';

const rootReducer = combineReducers({
  houses: AllHousesReducer,
  concession: ConcessionReducer,
  selectedHouse: SelectedHouseReducer
});

export default rootReducer;
