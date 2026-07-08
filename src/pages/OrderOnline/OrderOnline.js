import React from 'react';
import Button from '../../components/Button/Button';
import './OrderOnline.css';

function OrderOnline() {
  return (
    <section className="order-page">
      <div className="order-inner">
        <h1 className="order-title">Order Online</h1>
        <p className="order-intro">
          Enjoy Little Lemon from the comfort of your home. Select your
          favorite dishes and we&rsquo;ll deliver them right to your door.
        </p>
        <div className="order-placeholder">
          <span className="order-icon" aria-hidden="true">&#x1F374;</span>
          <p className="order-message">
            Online ordering is coming soon! In the meantime, call us at
            (555) 123-4567 to place your order.
          </p>
          <Button variant="primary" disabled>
            Place Order
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
