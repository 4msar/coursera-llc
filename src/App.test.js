import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { BookingProvider } from './context/BookingContext';

test('renders Little Lemon heading', () => {
  render(
    <MemoryRouter>
      <BookingProvider>
        <App />
      </BookingProvider>
    </MemoryRouter>
  );
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
});
