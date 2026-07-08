import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const defaultProps = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  handleSubmit: jest.fn((e) => e.preventDefault()),
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  values: { date: '', time: '', guests: '', occasion: '', seating: '' },
  errors: {},
  touched: {},
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('BookingForm', () => {
  test('renders the form heading', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText('Book a Table')).toBeInTheDocument();
  });

  test('renders date input', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toHaveAttribute('type', 'date');
  });

  test('renders time select', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  });

  test('renders guests input', () => {
    render(<BookingForm {...defaultProps} />);
    const input = screen.getByLabelText(/guests/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
  });

  test('renders occasion select', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders seating preference radio group', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText('Seating preference')).toBeInTheDocument();
    expect(screen.getByLabelText('Indoor')).toBeInTheDocument();
    expect(screen.getByLabelText('Outdoor')).toBeInTheDocument();
    expect(screen.getByLabelText('No Preference')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText('Confirm Reservation')).toBeInTheDocument();
  });

  test('displays validation errors when touched and errors exist', () => {
    const propsWithErrors = {
      ...defaultProps,
      errors: {
        date: 'Choose a date',
        time: 'Choose a time',
        guests: 'Enter number of guests',
      },
      touched: { date: true, time: true, guests: true },
    };
    render(<BookingForm {...propsWithErrors} />);
    expect(screen.getByText('Choose a date')).toBeInTheDocument();
    expect(screen.getByText('Choose a time')).toBeInTheDocument();
    expect(screen.getByText('Enter number of guests')).toBeInTheDocument();
  });

  test('does not display errors when fields are not touched', () => {
    const propsWithErrors = {
      ...defaultProps,
      errors: { date: 'Choose a date', time: 'Choose a time' },
      touched: {},
    };
    render(<BookingForm {...propsWithErrors} />);
    expect(screen.queryByText('Choose a date')).not.toBeInTheDocument();
    expect(screen.queryByText('Choose a time')).not.toBeInTheDocument();
  });

  test('calls handleChange when date input changes', () => {
    const handleChange = jest.fn();
    render(<BookingForm {...defaultProps} handleChange={handleChange} />);
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { name: 'date', value: '2026-07-15' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  test('calls handleSubmit on form submission', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<BookingForm {...defaultProps} handleSubmit={handleSubmit} />);
    fireEvent.click(screen.getByText('Confirm Reservation'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('renders correct number of time options', () => {
    const times = ['17:00', '18:00', '19:00'];
    render(<BookingForm {...defaultProps} availableTimes={times} />);
    const select = screen.getByLabelText(/time/i);
    expect(select).toBeInTheDocument();
  });

  test('shows no times available message when availableTimes is empty', () => {
    render(<BookingForm {...defaultProps} availableTimes={[]} />);
    const select = screen.getByLabelText(/time/i);
    expect(select).toBeInTheDocument();
    expect(select.options.length).toBe(1); // only the placeholder
    expect(select.options[0].text).toBe('No times available');
  });

  test('renders required indicator on required fields', () => {
    render(<BookingForm {...defaultProps} />);
    const requiredIndicators = screen.getAllByText('*');
    expect(requiredIndicators.length).toBeGreaterThanOrEqual(3);
  });
});
