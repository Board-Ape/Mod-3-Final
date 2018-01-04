import React from "react";
import CardContainer from './CardContainer';
import Card from '../Card/Card';
import { fakeStore } from './fakeStore';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

const setup = () => {
  const props = {
    renderCards: jest.fn(),
    renderMembers: jest.fn()
  };
  const wrapper = mount(
    <CardContainer
      store = {fakeStore}
      renderCards={props.renderCards}
      renderMembers={props.renderMembers} />
  );

  const Component = wrapper.find(CardContainer);

  return {
    props,
    Component
  };
};

describe('Components', () => {
  describe('Card', () => {
    it.skip('should render something', () => {
      const { Component } = setup();

      expect(Component.find('card-container').length).toEqual(1);
    });
  });
});
