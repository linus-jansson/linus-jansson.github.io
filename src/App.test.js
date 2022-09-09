import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks for made by linus text on pasge', () => {
  render(<App />);
  const linkElement = screen.getByText(/Made By Linus J/i);
  expect(linkElement).toBeInTheDocument();
});
