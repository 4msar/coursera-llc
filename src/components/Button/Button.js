import React from 'react';
import './Button.css';

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary', className = '', ariaLabel }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
