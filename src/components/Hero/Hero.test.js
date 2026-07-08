import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero', () => {
  function renderHero() {
    return render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  }

  test('renders the restaurant title', () => {
    renderHero();
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });

  test('renders the location subtitle', () => {
    renderHero();
    expect(screen.getByText('Dhaka')).toBeInTheDocument();
  });

  test('renders the description', () => {
    renderHero();
    expect(
      screen.getByText(/family-owned mediterranean restaurant/i)
    ).toBeInTheDocument();
  });

  test('renders CTA link to booking page', () => {
    renderHero();
    const link = screen.getByText('Reserve a Table');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/booking');
  });

  test('renders the restaurant image', () => {
    renderHero();
    const img = screen.getByAltText(/restaurant/i);
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
  });

  test('renders image with lazy loading', () => {
    renderHero();
    const img = screen.getByAltText(/restaurant/i);
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
