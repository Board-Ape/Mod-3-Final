import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import houseData from './houseData-reducer';
import members from './members-reducer';
import currentView from './currentView-reducer';

const rootReducer = combineReducers({
  fake,
  houseData,
  members,
  currentView
});

export default rootReducer;
