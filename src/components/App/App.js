import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction, fetchHouses } from '../../actions/index';
import CardContainer from '../CardContainer/CardContainer';


class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  render() {
    //Create a conditional rendering showing the GIF
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardContainer houseData={this.props.houseData}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired,
  getHouseData: PropTypes.func,
  houseData: PropTypes.object
};

const mapStateToProps = store => ({
  houseData: store.houseData
});

const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  getHouseData: () => dispatch(fetchHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
