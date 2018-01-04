import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction, fetchHouses } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';


class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <CardContainer />
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired,
  getHouseData: PropTypes.func
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  getHouseData: () => dispatch(fetchHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
