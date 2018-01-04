import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';
import '../App/App.css';

class CardContainer extends Component {

  renderCards = () => this.props.houseData.map(house => {
    return <Card
      key={house.name}
      house={house} />;
  })

  render() {
    if (this.props.houseData) {
      return (
        <div className='card-container'>
          {this.renderCards()}
        </div>
      );
    } else {
      return (
        <div>
          <h1 className='loading'>LOADING</h1>
        </div>
      );
    }
  }
}

CardContainer.propTypes = {
  houseData: PropTypes.array
};

export default CardContainer;
