import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const reqSvgs = require.context ('../images', true, /\.svg$/ )
const svgs = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} )

function Card(props) {
  return (
    <div className="App">
        {console.log(props)}
        {props.name === './new' ?
        <p>Click Deal to deal your first card, or Shuffle to shuffle the deck.</p>
        :
        props.name === './done' ?
          <p>No more cards. Refresh browser for a new deck.</p>
          :
          <img src={svgs[props.name].default} alt={svgs[props.name].default} />
        }
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired
};

export default Card;
