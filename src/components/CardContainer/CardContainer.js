import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default CardContainer;
