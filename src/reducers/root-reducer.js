import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseData } from './houseData-reducer';

const rootReducer = combineReducers({
  fake,
  houseData
});


export default rootReducer;
