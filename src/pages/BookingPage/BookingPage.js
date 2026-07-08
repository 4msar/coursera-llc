import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import { submitAPI } from '../../utils/api';
import { initializeTimes, updateTimes } from '../../utils/reducers';
import { validateBooking } from '../../utils/validation';
import { useBookingContext } from '../../context/BookingContext';
import './BookingPage.css';

function BookingPage() {
  const navigate = useNavigate();
  const { dispatch: ctxDispatch } = useBookingContext();
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, null, initializeTimes);
  const [submitError, setSubmitError] = React.useState('');

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormValidation(
      { date: '', time: '', guests: '1', occasion: '', seating: '' },
      validateBooking
    );

  function handleDateChange(e) {
    handleChange(e);
    if (e.target.value) {
      dispatchTimes({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
    }
  }

  function onSubmit(formValues) {
    const success = submitAPI(formValues);
    if (success) {
      ctxDispatch({
        type: 'SET_BOOKING',
        payload: { id: Date.now().toString(), ...formValues },
      });
      navigate('/confirmed-booking');
    } else {
      setSubmitError('Unable to complete reservation. Please try again.');
    }
  }

  return (
    <section className="booking-page">
      <div className="booking-page-inner">
        <div className="booking-page-header">
          <h1 className="booking-page-title">Reserve a Table</h1>
          <p className="booking-page-subtitle">
            Fill in the details below and we&rsquo;ll save a spot for you.
          </p>
        </div>

        {submitError && (
          <div className="booking-page-error" role="alert">
            {submitError}
          </div>
        )}

        <BookingForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleDateChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit(onSubmit)}
          availableTimes={availableTimes}
        />
      </div>
    </section>
  );
}

export default BookingPage;
