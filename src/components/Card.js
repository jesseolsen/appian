import '../App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const reqSvgs = require.context ('../images', true, /\.svg$/ )
const svgs = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} )

function Card(props) {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  useEffect(() => {
    // NOTE: In production I'd internationalize all string values
    if (props.name === './new') {
      setText('Click Deal to deal a card, Shuffle to shuffle the deck, or Reset to return the cards to the deck.');
    } else if (props.name === './done') {
      setText('No more cards. Refresh browser or click Reset for a new deck.');
    }
    let svg = svgs[props.name];
    if (svg !== undefined) {
      setImage(svg.default);
    } else {
      setImage(null);
    }
  }, [props.name]);
  return (
    <div className="App">
        { text && <p>{text}</p>}
        { image && <img src={image} alt={image} /> }
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired
};

export default Card;
