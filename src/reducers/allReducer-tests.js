import houseData from './houseData';
import members from './members';
import currentView from './currentView';
import * as actions from '../actions'

describe('All Reducers', () => {

  it('should have an initial state', () => {
    const expectedState = [];

    expect(houseData(undefined, [])).toEqual(expectedState);
  });

  it('should return a new state with an action', () => {
    const mockHousesObject = {gramps: 'grump', gum: 'bum'};
    const expected = mockHousesObject;

    expect(houseData(
      {}, actions.fetchHousesSuccess(mockHousesObject))).toEqual(expected);
  });

});
