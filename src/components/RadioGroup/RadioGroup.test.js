import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

const options = [
  { value: 'indoor', label: 'Indoor' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'no-preference', label: 'No Preference' },
];

const defaultProps = {
  legend: 'Seating preference',
  name: 'seating',
  options,
};

describe('RadioGroup', () => {
  test('renders the legend', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getByText('Seating preference')).toBeInTheDocument();
  });

  test('renders all radio options', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getByLabelText('Indoor')).toBeInTheDocument();
    expect(screen.getByLabelText('Outdoor')).toBeInTheDocument();
    expect(screen.getByLabelText('No Preference')).toBeInTheDocument();
  });

  test('all options have the same name for grouping', () => {
    render(<RadioGroup {...defaultProps} />);
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'seating');
    });
  });

  test('checks the selected option', () => {
    render(<RadioGroup {...defaultProps} value="outdoor" />);
    expect(screen.getByLabelText('Outdoor')).toBeChecked();
    expect(screen.getByLabelText('Indoor')).not.toBeChecked();
    expect(screen.getByLabelText('No Preference')).not.toBeChecked();
  });

  test('calls onChange when an option is clicked', () => {
    const handleChange = jest.fn();
    render(<RadioGroup {...defaultProps} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Indoor'));
    expect(handleChange).toHaveBeenCalled();
  });

  test('shows error when touched and error present', () => {
    render(<RadioGroup {...defaultProps} error="Please select a preference" touched />);
    expect(screen.getByRole('alert')).toHaveTextContent('Please select a preference');
  });

  test('does not show error when not touched', () => {
    render(<RadioGroup {...defaultProps} error="Please select a preference" />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('renders required indicator', () => {
    render(<RadioGroup {...defaultProps} required onChange={jest.fn()} />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('renders inside a fieldset element', () => {
    const { container } = render(<RadioGroup {...defaultProps} />);
    expect(container.querySelector('fieldset')).toBeInTheDocument();
  });

  test('renders no options when options array is empty', () => {
    render(<RadioGroup {...defaultProps} options={[]} />);
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
  });
});
