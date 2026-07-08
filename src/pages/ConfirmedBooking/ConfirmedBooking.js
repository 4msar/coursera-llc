import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useBookingContext } from '../../context/BookingContext';
import { formatDate } from '../../utils/helpers';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const { state } = useBookingContext();
  const { booking } = state;

  if (!booking) {
    return <Navigate to="/booking" replace />;
  }

  return (
    <section className="confirmed-page">
      <div className="confirmed-page-inner">
        <div className="confirmed-card">
          <div className="confirmed-icon-wrapper">
            <span className="confirmed-icon" aria-hidden="true">&#10003;</span>
          </div>

          <h1 className="confirmed-title">Booking Confirmed!</h1>
          <p className="confirmed-thanks">
            Thank you, {booking.name || 'Guest'}. Your reservation has been received.
          </p>

          <dl className="confirmed-details">
            <div className="confirmed-detail">
              <dt>Confirmation</dt>
              <dd>#{booking.id}</dd>
            </div>
            <div className="confirmed-detail">
              <dt>Date</dt>
              <dd>{formatDate(booking.date)}</dd>
            </div>
            <div className="confirmed-detail">
              <dt>Time</dt>
              <dd>{booking.time}</dd>
            </div>
            <div className="confirmed-detail">
              <dt>Guests</dt>
              <dd>{booking.guests}</dd>
            </div>
            <div className="confirmed-detail">
              <dt>Occasion</dt>
              <dd>{booking.occasion || 'None specified'}</dd>
            </div>
            <div className="confirmed-detail">
              <dt>Seating</dt>
              <dd>{booking.seating ? booking.seating.replace('-', ' ') : 'No preference'}</dd>
            </div>
          </dl>

          <div className="confirmed-actions">
            <Link to="/" className="confirmed-btn confirmed-btn--primary">
              Back to Home
            </Link>
            <Link to="/booking" className="confirmed-btn confirmed-btn--secondary">
              Book Another
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
