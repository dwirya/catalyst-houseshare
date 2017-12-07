

import { combineReducers } from 'redux';
import AllHousesReducer from './reducer_all_houses';
import SelectedChoresReducer from './reducer_get_concession.js';
import SelectedHouseReducer from './reducer_select_house.js';

const rootReducer = combineReducers({
  houses: AllHousesReducer,
  selectedChores: SelectedChoresReducer,
  selectedHouse: SelectedHouseReducer
});

export default rootReducer;
