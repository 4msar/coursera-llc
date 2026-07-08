import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-inner">
        <span className="not-found-code" aria-hidden="true">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link to="/" className="not-found-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
