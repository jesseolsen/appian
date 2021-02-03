import '../App.css';
import { cards } from '../constants/cards';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Deck() {
  const [deck, setDeck] = useState(cards);
  const [card, setCard] = useState('new');
  const shuffle = () => {
    let newDeck = [];
    while (deck.length > 0) {
      let i = Math.floor(Math.random() * Math.floor(deck.length));
      console.log(i);
      newDeck.push(deck[i]);
      deck.splice(i, 1);
    }
    setDeck(newDeck);
  }
  const dealOneCard = () => {
    let next = 'done';
    if (deck.length >= 0) {
      console.log(deck);
      next = deck.pop();
      console.log('next', next);
      if (next === undefined) {
        next = 'done';
      }
      setCard(next);
      setDeck(deck);
    }
    return next;
  }

  return (
    <div className="App">
        <Card name={`./${card}`} />
        <br/>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={dealOneCard}>Deal</button>
    </div>
  );
}
Deck.propTypes = {
  name: PropTypes.string.isRequired
};

export default Deck;
