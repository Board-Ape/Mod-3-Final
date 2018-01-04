import React from 'react';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
import mockData from './mockData';

describe('Card Tests', () => {

  it('should render component and match snapshot', () => {
    const renderedCard = shallow(
      <Card house={mockData[0]} />);

    expect(renderedCard).toMatchSnapshot();
  });
});
