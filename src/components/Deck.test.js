import { mount } from 'enzyme';

// import { render, screen } from '@testing-library/react';
import Deck from './Deck';

let wrapper, dealButton, resetButton;
describe('<Deck>', () => {
  beforeEach(() => {
    wrapper = mount(<Deck />);
    dealButton = wrapper.find('button').at(1);
    resetButton = wrapper.find('button').at(2);
    resetButton.simulate('click');
  });
  it('starts with no card shown', () => {
    const card = wrapper.find('Card');
    expect(card.prop('name')).toBe('./new');
  });
  it('deals a queen of spades to start if deck is not shuffled', () => {
    dealButton.simulate('click');
    const card = wrapper.find('Card');
    expect(card.prop('name')).toBe('./queen_of_spades.svg');
  });
  it('deals card 52', () => {
    for (let i = 1; i <= 52; i++) {
      dealButton.simulate('click');
    }
    const card = wrapper.find('Card');
    expect(card.prop('name')).not.toBe('./done');
  });
  it('deals no card after 52 cards are delt', () => {
    for (let i = 1; i <= 53; i++) {
      dealButton.simulate('click');
    }
    const card = wrapper.find('Card');
    expect(card.prop('name')).toBe('./done');
  });
});
