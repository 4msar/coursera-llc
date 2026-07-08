import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message, onRetry }) {
  if (!message) return null;

  return (
    <div className="error-message" role="alert">
      <span className="error-message-icon" aria-hidden="true">&#9888;</span>
      <p className="error-message-text">{message}</p>
      {onRetry && (
        <button className="error-message-retry" onClick={onRetry} type="button">
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
