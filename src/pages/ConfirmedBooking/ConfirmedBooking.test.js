import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import { BookingContext } from '../../context/BookingContext';

const mockBooking = {
  id: 'abc123',
  date: '2026-07-15',
  time: '18:00',
  guests: '4',
  occasion: 'Birthday',
  seating: 'indoor',
};

function renderWithBooking(booking) {
  return render(
    <BookingContext.Provider
      value={{ state: { booking }, dispatch: jest.fn() }}
    >
      <MemoryRouter>
        <ConfirmedBooking />
      </MemoryRouter>
    </BookingContext.Provider>
  );
}

describe('ConfirmedBooking', () => {
  test('renders confirmation heading when booking exists', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('Booking Confirmed!')).toBeInTheDocument();
  });

  test('displays confirmation ID', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('#abc123')).toBeInTheDocument();
  });

  test('displays booking date', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('Wednesday, July 15, 2026')).toBeInTheDocument();
  });

  test('displays booking time', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('18:00')).toBeInTheDocument();
  });

  test('displays number of guests', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('displays occasion', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });

  test('displays seating preference', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText('indoor')).toBeInTheDocument();
  });

  test('displays checkmark icon', () => {
    renderWithBooking(mockBooking);
    const icon = screen.getByText('\u2713');
    expect(icon).toBeInTheDocument();
  });

  test('renders back to home link', () => {
    renderWithBooking(mockBooking);
    const link = screen.getByText('Back to Home');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  test('renders book another link', () => {
    renderWithBooking(mockBooking);
    const link = screen.getByText('Book Another');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/booking');
  });

  test('redirects to /booking when no booking exists', () => {
    renderWithBooking(null);
    expect(screen.queryByText('Booking Confirmed!')).not.toBeInTheDocument();
  });

  test('shows guest placeholder when name is not present', () => {
    const bookingWithoutName = { ...mockBooking };
    delete bookingWithoutName.name;
    renderWithBooking(bookingWithoutName);
    expect(screen.getByText(/thank you, guest/i)).toBeInTheDocument();
  });

  test('renders thank you message', () => {
    renderWithBooking(mockBooking);
    expect(screen.getByText(/your reservation has been received/i)).toBeInTheDocument();
  });
});
