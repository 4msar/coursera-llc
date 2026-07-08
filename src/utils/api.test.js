import { fetchAPI, submitAPI } from './api';

describe('fetchAPI', () => {
  test('returns an array', () => {
    const result = fetchAPI(new Date(2026, 6, 15));
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns time strings in HH:MM format', () => {
    const result = fetchAPI(new Date(2026, 6, 15));
    result.forEach((time) => {
      expect(time).toMatch(/^\d{2}:\d{2}$/);
    });
  });

  test('returns deterministic results for the same date', () => {
    const date = new Date(2026, 6, 15);
    const first = fetchAPI(date);
    const second = fetchAPI(date);
    expect(first).toEqual(second);
  });

  test('returns different results for different dates', () => {
    const times1 = fetchAPI(new Date(2026, 6, 15));
    const times2 = fetchAPI(new Date(2026, 6, 20));
    // At least some dates will differ due to seeded random
    const areDifferent = JSON.stringify(times1) !== JSON.stringify(times2);
    expect(areDifferent).toBe(true);
  });

  test('returns times between 17:00 and 23:30', () => {
    const result = fetchAPI(new Date(2026, 6, 15));
    result.forEach((time) => {
      const [hours, minutes] = time.split(':').map(Number);
      expect(hours).toBeGreaterThanOrEqual(17);
      expect(hours).toBeLessThanOrEqual(23);
      expect([0, 30]).toContain(minutes);
    });
  });

  test('handles edge date values', () => {
    expect(() => fetchAPI(new Date('invalid'))).not.toThrow();
  });
});

describe('submitAPI', () => {
  test('returns true for valid booking data', () => {
    const formData = { date: '2026-07-15', time: '18:00', guests: '4' };
    expect(submitAPI(formData)).toBe(true);
  });

  test('returns true for empty data', () => {
    expect(submitAPI({})).toBe(true);
  });

  test('accepts any formData shape', () => {
    expect(submitAPI({ random: 'data', nested: { key: 'value' } })).toBe(true);
  });
});
