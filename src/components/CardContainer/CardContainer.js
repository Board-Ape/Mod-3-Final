import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { fetchMembers, resetViewToHouses } from '../../actions';
import './CardContainer.css';
import '../App/App.css';

class CardContainer extends Component {

  renderCards = () => this.props.houseData.map(house => {
    return <Card
      resetView={this.props.resetView}
      currentView={this.props.currentView}
      getHouseMembers={this.props.getHouseMembers}
      key={house.name}
      house={house} />;
  })

  renderMembers = () => this.props.members.map(member => {
    return <Card
      currentView={this.props.currentView}
      key={member.name}
      member={member}/>;
  })

  render() {
    if (this.props.houseData
      && this.props.currentView === 'houses') {
      return (
        <div className='card-container'>
          {this.renderCards()}
          {this.renderMembers()}
        </div>
      );
    }
    if (this.props.members && this.props.currentView === 'members') {
      return (
        <div className='card-container'>
          {this.renderMembers()}
        </div>
      );
    }
  }
}

const mapStateToProps = (store) => ({
  houseData: store.houseData,
  members: store.members,
  currentView: store.currentView
});

const mapDispatchToProps = (dispatch) => ({
  getHouseMembers: (membersURLs) => dispatch(fetchMembers(membersURLs)),
  resetView: () => dispatch(resetViewToHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  houseData: PropTypes.array,
  getHouseMembers: PropTypes.func,
  members: PropTypes.array,
  currentView: PropTypes.string,
  resetView: PropTypes.func
};
