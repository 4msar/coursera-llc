import React from 'react';
import './SpecialCard.css';

function SpecialCard({ item }) {
  const { title, price, description, image } = item;

  return (
    <article className="special-card">
      <div className="special-card-image-wrapper">
        <img
          className="special-card-image"
          src={image}
          alt={title}
          width="300"
          height="200"
          loading="lazy"
        />
      </div>
      <div className="special-card-body">
        <div className="special-card-header">
          <h3 className="special-card-title">{title}</h3>
          <span className="special-card-price">{price}</span>
        </div>
        <p className="special-card-description">{description}</p>
        <a href="/order-online" className="special-card-order">
          Order for delivery
        </a>
      </div>
    </article>
  );
}

export default SpecialCard;
