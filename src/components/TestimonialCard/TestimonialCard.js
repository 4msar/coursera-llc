import React from 'react';
import Rating from '../Rating/Rating';
import './TestimonialCard.css';

function TestimonialCard({ review }) {
  const { name, rating, text, avatar } = review;

  return (
    <article className="testimonial-card">
      <Rating value={rating} />
      <div className="testimonial-card-author">
        <img
          className="testimonial-card-avatar"
          src={avatar}
          alt={name}
          width="50"
          height="50"
          loading="lazy"
        />
        <h3 className="testimonial-card-name">{name}</h3>
      </div>
      <blockquote className="testimonial-card-text">
        &ldquo;{text}&rdquo;
      </blockquote>
    </article>
  );
}

export default TestimonialCard;
