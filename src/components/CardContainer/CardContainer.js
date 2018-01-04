import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class CardContainer extends Component {

  renderCards = () => this.props.houseData.map(house => {
    return <Card
      key={house.name}
      house={house} />;
  })

  render() {
    if (this.props.houseData) {
      return (
        <div>
          {this.renderCards()}
        </div>
      );
    } else {
      return (
        <div>
          <h1>LOADING</h1>
        </div>
      );
    }
  }
}

CardContainer.propTypes = {
  houseData: PropTypes.object
};

export default CardContainer;
