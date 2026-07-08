import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ size = 'md', label = 'Loading...' }) {
  return (
    <div className={`spinner spinner--${size}`} role="status" aria-label={label}>
      <div className="spinner-ring" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default LoadingSpinner;
