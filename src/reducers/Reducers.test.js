import houseData from './houseData-reducer';
import * as actions from '../actions'

describe('All Reducers', () => {

  // HouseData Reducer

  it('should have an initial state', () => {
    const expectedState = [];

    expect(houseData(undefined, [])).toEqual(expectedState);
  });
});
