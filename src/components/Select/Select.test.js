import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

const options = [
  { value: 'opt1', label: 'Option One' },
  { value: 'opt2', label: 'Option Two' },
  { value: 'opt3', label: 'Option Three' },
];

const defaultProps = {
  label: 'Choose an option',
  id: 'choose-option',
  name: 'chooseOption',
  options,
};

describe('Select', () => {
  test('renders label and select element', () => {
    render(<Select {...defaultProps} />);
    const select = screen.getByLabelText('Choose an option');
    expect(select).toBeInTheDocument();
    expect(select.tagName).toBe('SELECT');
  });

  test('renders all option elements', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByText('Option One')).toBeInTheDocument();
    expect(screen.getByText('Option Two')).toBeInTheDocument();
    expect(screen.getByText('Option Three')).toBeInTheDocument();
  });

  test('renders placeholder option when provided', () => {
    render(<Select {...defaultProps} placeholder="Pick one" />);
    expect(screen.getByText('Pick one')).toBeInTheDocument();
  });

  test('shows error message when touched and error present', () => {
    render(<Select {...defaultProps} error="Select is required" touched />);
    expect(screen.getByRole('alert')).toHaveTextContent('Select is required');
  });

  test('sets aria-invalid when error exists', () => {
    render(<Select {...defaultProps} error="Required" touched />);
    expect(screen.getByLabelText('Choose an option')).toHaveAttribute('aria-invalid', 'true');
  });

  test('does not show error when not touched', () => {
    render(<Select {...defaultProps} error="Required" />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('calls onChange when selection changes', () => {
    const handleChange = jest.fn();
    render(<Select {...defaultProps} onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Choose an option'), {
      target: { value: 'opt2' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders required indicator', () => {
    render(<Select {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
