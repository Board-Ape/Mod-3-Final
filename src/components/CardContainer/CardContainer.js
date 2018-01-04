import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { fetchMembers } from '../../actions';
import './CardContainer.css';
import '../App/App.css';

class CardContainer extends Component {

  renderCards = () => this.props.houseData.map(house => {
    return <Card
      getHouseMembers={this.props.getHouseMembers}
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

const mapStateToProps = (store) => ({
  houseData: store.houseData
});

const mapDispatchToProps = (dispatch) => ({
  getHouseMembers: (membersURLs) => dispatch(fetchMembers(membersURLs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  houseData: PropTypes.array,
  getHouseMembers: PropTypes.func
};
