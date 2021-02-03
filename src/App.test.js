import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hosted site link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hosted site/i);
  expect(linkElement).toBeInTheDocument();
});
