import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import houseData from './houseData-reducer';
import members from './members-reducer';

const rootReducer = combineReducers({
  fake,
  houseData,
  members
});

export default rootReducer;
