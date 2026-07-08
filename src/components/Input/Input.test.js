import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

const defaultProps = {
  label: 'Full Name',
  id: 'full-name',
  name: 'fullName',
};

describe('Input', () => {
  test('renders label and input', () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByLabelText('Full Name');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  test('renders with the correct type', () => {
    render(<Input {...defaultProps} type="email" />);
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('type', 'email');
  });

  test('shows error message when touched and error present', () => {
    render(<Input {...defaultProps} error="Required" touched />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  test('sets aria-invalid when error exists', () => {
    render(<Input {...defaultProps} error="Required" touched />);
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('aria-invalid', 'true');
  });

  test('sets aria-invalid to false when no error', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('aria-invalid', 'false');
  });

  test('does not render error when not touched', () => {
    render(<Input {...defaultProps} error="Required" />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('renders required indicator when required is true', () => {
    render(<Input {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('does not render required indicator when required is false', () => {
    render(<Input {...defaultProps} />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  test('links error message via aria-describedby', () => {
    render(<Input {...defaultProps} error="Required" touched />);
    const input = screen.getByLabelText('Full Name');
    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBeTruthy();
    expect(screen.getByRole('alert')).toHaveAttribute('id', errorId);
  });

  test('applies error class when error present', () => {
    render(<Input {...defaultProps} error="Required" touched />);
    expect(screen.getByLabelText('Full Name').className).toContain('input-field--error');
  });

  test('renders placeholder text', () => {
    render(<Input {...defaultProps} placeholder="Enter your name" />);
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('placeholder', 'Enter your name');
  });
});
