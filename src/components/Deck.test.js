import { mount } from 'enzyme';

// import { render, screen } from '@testing-library/react';
import Deck from './Deck';

describe('<Deck>', () => {
  it('starts with no card shown', () => {
    const wrapper = mount(<Deck />);
    const shuffleButton = wrapper.find('button').at(0);
    const dealButton = wrapper.find('button').at(1);
    console.log('shuffleButton', shuffleButton);
    console.log('dealButton', dealButton);
    // dealButton.simulate('click');
    // const image = wrapper.find('img');
    const card = wrapper.find('Card');
    expect(card.prop('name')).toBe('./new');
    // expect(image.prop('name')).toBe('me');
  });
});
