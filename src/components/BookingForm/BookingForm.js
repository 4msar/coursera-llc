import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import RadioGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';
import './BookingForm.css';

const occasionOptions = [
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Anniversary', label: 'Anniversary' },
  { value: 'Engagement', label: 'Engagement' },
  { value: 'Other', label: 'Other' },
];

const seatingOptions = [
  { value: 'indoor', label: 'Indoor' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'no-preference', label: 'No Preference' },
];

function toDisplayTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

function BookingForm({ values, errors, touched, handleChange, handleBlur, handleSubmit, availableTimes = [] }) {
  const today = new Date().toISOString().split('T')[0];
  const timeOptions = availableTimes.map((t) => ({ value: t, label: toDisplayTime(t) }));

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2 className="booking-form-title">Book a Table</h2>

      <Input
        label="Date"
        id="booking-date"
        name="date"
        type="date"
        value={values.date || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.date}
        touched={touched.date}
        required
        min={today}
      />

      {availableTimes.length > 0 ? (
        <Select
          label="Time"
          id="booking-time"
          name="time"
          value={values.time || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          options={timeOptions}
          placeholder="Select a time"
          error={errors.time}
          touched={touched.time}
          required
        />
      ) : (
        <Select
          label="Time"
          id="booking-time"
          name="time"
          value=""
          onChange={handleChange}
          onBlur={handleBlur}
          options={[]}
          placeholder="No times available"
          error={errors.time}
          touched={touched.time}
          required
        />
      )}

      <Input
        label="Number of guests"
        id="booking-guests"
        name="guests"
        type="number"
        value={values.guests || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.guests}
        touched={touched.guests}
        required
        min={1}
        max={10}
      />

      <Select
        label="Occasion"
        id="booking-occasion"
        name="occasion"
        value={values.occasion || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        options={occasionOptions}
        placeholder="Select occasion"
        error={errors.occasion}
        touched={touched.occasion}
      />

      <RadioGroup
        legend="Seating preference"
        name="seating"
        value={values.seating || ''}
        onChange={handleChange}
        options={seatingOptions}
        error={errors.seating}
        touched={touched.seating}
      />

      <Button type="submit" variant="primary">
        Confirm Reservation
      </Button>
    </form>
  );
}

export default BookingForm;
