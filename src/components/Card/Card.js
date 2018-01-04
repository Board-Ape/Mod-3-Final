import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App/App.css';

const Card = ({house}) => {
  return (
    <Link to={'/'}>
      <div className='card'>
        <h1>{house.name}</h1>
        <h2>FOUNDED: {house.founded}</h2>
        <h3>SEATS: {house.seats.map(seats => {
          return seats;
        })}</h3>
        <h4>COAT OF ARMS: {house.coatOfArms}</h4>
        <h4>ANCESTRAL WEAPONS: {house.ancestralWeapons.map(weapons => {
          return weapons;
        })}</h4>
        <h1>{house.words}</h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
