import * as actions from './index.js';
import React from 'react';
import {shallow} from 'enzyme';

describe('actions', () => {

  it('should create a fake action', () => {
    const expected = { type: "FAKE"};

    expect(actions.fakeAction()).toEqual(expected);
  });

  it('should create an action to fetch houses successfully', () => {
    const houses = ['This', 'That'];
    const expectedAction = {
      type: 'HOUSES_SUCCESS',
      houses
    };
    expect(actions.fetchHousesSuccess(houses)).toEqual(expectedAction);
  });

  it('should create an action to reset view to houses', () => {
    const expectedAction = {
      type: "RESET_VIEW"
    };
    expect(actions.resetViewToHouses()).toEqual(expectedAction);
  });

  it('should create an action when fetch members successfully', () => {
    const members = ['Name', 'Ran'];
    const expectedAction = {
      type: 'MEMBER_SUCCESS',
      members
    };
    expect(actions.fetchMembersSuccess(members)).toEqual(expectedAction);
  });

});
