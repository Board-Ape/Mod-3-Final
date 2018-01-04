import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const Card = ({ house, getHouseMembers }) => {
  return (
    // on click getMembers and pass house.swornMembers
    <div className='card' onClick={() => getHouseMembers(house.swornMembers)}>
      <h1>{house.name}</h1>
      <h2>Founded: {house.founded}</h2>
      <h3>Seats: {house.seats.map( seat => {
        return seat;
      })}</h3>
      <h3>Titles: {house.titles.map( title => {
        return title;
      })}</h3>
      <h4>Coat of Arms: {house.coatOfArms}</h4>
      <h4>Ancestral Weapons: {house.ancestralWeapons.map( weapon => {
        return weapon;
      })}</h4>
      <h1>{house.words}</h1>
    </div>
  );
};

Card.propTypes = {
  house: PropTypes.object,
  getHouseMembers: PropTypes.func
};

export default Card;
