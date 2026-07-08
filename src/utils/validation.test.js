import { validateBooking } from './validation';

describe('validateBooking', () => {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const futureDate = '2026-12-25';

  const validValues = {
    date: futureDate,
    time: '18:00',
    guests: '4',
    occasion: 'Birthday',
    seating: 'indoor',
  };

  test('returns no errors for completely valid data', () => {
    expect(validateBooking(validValues)).toEqual({});
  });

  test('returns no errors when occasion and seating are empty (optional)', () => {
    const { occasion, seating, ...required } = validValues;
    expect(validateBooking(required)).toEqual({});
  });

  test('returns error when date is empty', () => {
    const errors = validateBooking({ ...validValues, date: '' });
    expect(errors.date).toBeDefined();
    expect(errors.date.length).toBeGreaterThan(0);
  });

  test('returns error when date is in the past', () => {
    const errors = validateBooking({ ...validValues, date: yesterday });
    expect(errors.date).toBeDefined();
  });

  test('returns error when time is empty', () => {
    const errors = validateBooking({ ...validValues, time: '' });
    expect(errors.time).toBeDefined();
    expect(errors.time.length).toBeGreaterThan(0);
  });

  test('returns error when guests is empty', () => {
    const errors = validateBooking({ ...validValues, guests: '' });
    expect(errors.guests).toBeDefined();
  });

  test('returns error when guests is less than 1', () => {
    const errors = validateBooking({ ...validValues, guests: '0' });
    expect(errors.guests).toBeDefined();
  });

  test('returns error when guests is greater than 10', () => {
    const errors = validateBooking({ ...validValues, guests: '11' });
    expect(errors.guests).toBeDefined();
  });

  test('accepts guests at the boundary of 1', () => {
    const errors = validateBooking({ ...validValues, guests: '1' });
    expect(errors.guests).toBeUndefined();
  });

  test('accepts guests at the boundary of 10', () => {
    const errors = validateBooking({ ...validValues, guests: '10' });
    expect(errors.guests).toBeUndefined();
  });

  test('returns multiple errors at once', () => {
    const errors = validateBooking({ date: '', time: '', guests: '' });
    expect(errors.date).toBeDefined();
    expect(errors.time).toBeDefined();
    expect(errors.guests).toBeDefined();
  });

  test('returns no error when today is selected', () => {
    const errors = validateBooking({ ...validValues, date: today });
    expect(errors.date).toBeUndefined();
  });
});
