export function validateBooking(values) {
  const errors = {};
  const today = new Date().toISOString().split('T')[0];

  if (!values.date) {
    errors.date = 'Choose a date';
  } else if (values.date < today) {
    errors.date = 'Date must be today or later';
  }

  if (!values.time) {
    errors.time = 'Choose a time';
  }

  if (!values.guests) {
    errors.guests = 'Enter number of guests';
  } else {
    const num = parseInt(values.guests, 10);
    if (isNaN(num) || num < 1) {
      errors.guests = 'At least 1 guest';
    } else if (num > 10) {
      errors.guests = 'Maximum 10 guests';
    }
  }

  return errors;
}
