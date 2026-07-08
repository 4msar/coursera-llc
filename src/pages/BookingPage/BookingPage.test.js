import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './BookingPage';
import { BookingProvider } from '../../context/BookingContext';

const mockNavigate = jest.fn();
const mockSubmitAPI = jest.fn();
const mockFetchAPI = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('../../utils/api', () => ({
  submitAPI: (...args) => mockSubmitAPI(...args),
  fetchAPI: (...args) => mockFetchAPI(...args),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockFetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  mockSubmitAPI.mockReturnValue(true);
});

function renderBookingPage() {
  return render(
    <MemoryRouter>
      <BookingProvider>
        <BookingPage />
      </BookingProvider>
    </MemoryRouter>
  );
}

function fillValidForm() {
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, {
    target: { name: 'date', value: '2026-07-15' },
  });

  const timeSelect = screen.getByLabelText(/time/i);
  fireEvent.change(timeSelect, {
    target: { name: 'time', value: '18:00' },
  });

  const guestsInput = screen.getByLabelText(/guests/i);
  fireEvent.change(guestsInput, {
    target: { name: 'guests', value: '4' },
  });
}

describe('BookingPage', () => {
  test('renders the page heading', () => {
    renderBookingPage();
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });

  test('renders the page subtitle', () => {
    renderBookingPage();
    expect(
      screen.getByText(/fill in the details/i)
    ).toBeInTheDocument();
  });

  test('renders BookingForm component', () => {
    renderBookingPage();
    expect(screen.getByText('Book a Table')).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  });

  test('initializes available times on mount', () => {
    renderBookingPage();
    expect(mockFetchAPI).toHaveBeenCalled();
  });

  test('updates available times when date changes', () => {
    renderBookingPage();
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, {
      target: { name: 'date', value: '2026-12-25' },
    });
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2026-12-25'));
  });

  test('submits valid form and navigates to confirmation', () => {
    renderBookingPage();
    fillValidForm();
    fireEvent.click(screen.getByText('Confirm Reservation'));

    expect(mockSubmitAPI).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/confirmed-booking');
  });

  test('passes correct form data to submitAPI', () => {
    renderBookingPage();
    fillValidForm();
    fireEvent.click(screen.getByText('Confirm Reservation'));

    const calledWith = mockSubmitAPI.mock.calls[0][0];
    expect(calledWith.date).toBe('2026-07-15');
    expect(calledWith.time).toBe('18:00');
    expect(calledWith.guests).toBe('4');
  });

  test('shows error banner when submission fails', () => {
    mockSubmitAPI.mockReturnValue(false);
    renderBookingPage();
    fillValidForm();
    fireEvent.click(screen.getByText('Confirm Reservation'));

    expect(screen.getByRole('alert')).toHaveTextContent(/unable/i);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('does not navigate when form has validation errors', () => {
    renderBookingPage();
    // Submit without filling required fields
    fireEvent.click(screen.getByText('Confirm Reservation'));

    expect(mockSubmitAPI).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('shows validation errors on submit with empty fields', () => {
    renderBookingPage();

    const guestsInput = screen.getByLabelText(/guests/i);
    fireEvent.change(guestsInput, { target: { name: 'guests', value: '' } });

    fireEvent.click(screen.getByText('Confirm Reservation'));

    expect(screen.getByText('Choose a date')).toBeInTheDocument();
    expect(screen.getByText('Choose a time')).toBeInTheDocument();
    expect(screen.getByText('Enter number of guests')).toBeInTheDocument();
  });
});
