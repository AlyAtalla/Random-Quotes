import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuoteBox component', () => {
  render(<App />);
  const quoteBoxElement = screen.getByTestId('quote-box');
  expect(quoteBoxElement).toBeInTheDocument();
});

test('renders container with correct class', () => {
  render(<App />);
  const containerElement = screen.getByTestId('quote-box').parentElement;
  expect(containerElement).toHaveClass('container mt-5');
});