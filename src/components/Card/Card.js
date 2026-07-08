import React from 'react';
import './Card.css';

function Card({ title, description, image, price, children }) {
  return (
    <article>
      {image && <img src={image} alt={title} />}
      {title && <h3>{title}</h3>}
      {price && <span>{price}</span>}
      {description && <p>{description}</p>}
      {children}
    </article>
  );
}

export default Card;
