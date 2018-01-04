import houseData from './houseData-reducer';
import members from './members-reducer';
import currentView from './currentView-reducer';
import * as actions from '../actions'

describe('houseData reducer', () => {

  // HouseData Reducer

  it('should have an initial state', () => {
    const expectedState = [];

    expect(houseData(undefined, [])).toEqual(expectedState);
  });

  it('should return a new state with an action', () => {
    const mockHousesObject = {gramps: 'grump', gum: 'bum'};
    const expected = mockHousesObject;

    expect(houseData({}, actions.fetchHousesSuccess(mockHousesObject))).toEqual(expected);
  });

  // Members Reducer

  it('should have an initial state', () => {
    const expectedState = [];

    expect(members(undefined, [])).toEqual(expectedState);
  });

  it('should return a new state with an action', () => {
    const houseMembers = {aloy: 'Metal', prim: 'Rose'};
    const expected = houseMembers;

    expect(members({}, actions.fetchMembersSuccess(houseMembers))).toEqual(expected);
  });

  // CurrentView reducer

  it('should have an initial state', () => {
    const expectedState = 'houses';

    expect(currentView(undefined, [])).toEqual(expectedState);
  });

  it('should return a new state with an action', () => {
    const mockHouses = 'houses';
    const mockMembers = 'members';
    const expectedHouses = mockHouses;
    const expectedMembers = mockMembers;
    const expectedReset = mockHouses;

    expect(currentView({}, actions.fetchHousesSuccess(mockHouses))).toEqual(expectedHouses);
    expect(currentView({}, actions.fetchMembersSuccess(mockMembers))).toEqual(expectedMembers);
    expect(currentView({}, actions.resetViewToHouses(mockHouses))).toEqual(expectedReset);
  });

});
