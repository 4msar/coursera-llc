import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card with title and description', () => {
  render(<Card title="Greek Salad" description="Fresh and delicious" />);
  expect(screen.getByText('Greek Salad')).toBeInTheDocument();
  expect(screen.getByText('Fresh and delicious')).toBeInTheDocument();
});
