import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  // Adjust the import path as necessary

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
