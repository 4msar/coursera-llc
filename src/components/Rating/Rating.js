import React from 'react';
import './Rating.css';

function Rating({ value = 0, max = 5 }) {
  const stars = Array.from({ length: max }, (_, i) => i < value);

  return (
    <div className="rating" aria-label={`${value} out of ${max} stars`} role="img">
      {stars.map((filled, i) => (
        <span
          key={i}
          className={`rating-star${filled ? ' rating-star--filled' : ''}`}
          aria-hidden="true"
        >
          {filled ? '\u2605' : '\u2606'}
        </span>
      ))}
    </div>
  );
}

export default Rating;
