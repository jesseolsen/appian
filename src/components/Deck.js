import '../App.css';
import { cards } from '../constants/cards';
import React, { useState } from 'react';
import Card from './Card';

function Deck() {
  const [deck, setDeck] = useState([...cards]);
  const [card, setCard] = useState('new');
  const shuffle = () => {
    let newDeck = [];
    while (deck.length > 0) {
      let i = Math.floor(Math.random() * Math.floor(deck.length));
      newDeck.push(deck[i]);
      deck.splice(i, 1);
    }
    setDeck(newDeck);
  }
  const dealOneCard = () => {
    let next = 'done';
    if (deck.length >= 0) {
      next = deck.pop();
      if (next === undefined) {
        next = 'done';
      }
      setCard(next);
      setDeck(deck);
    }
    return next;
  }
  const reset = () => {
    setDeck([...cards]);
    setCard('new');
  }
  return (
    <div className="App">
        <Card name={`./${card}`} />
        <br/>
        <p>{deck.length} cards left in the deck.</p>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={dealOneCard}>Deal</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Deck;
