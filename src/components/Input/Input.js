import React from 'react';
import './Input.css';

function Input({ label, id, name, type = 'text', value, onChange, onBlur, error, touched, placeholder, required = false, min, max, minLength, maxLength, autoComplete }) {
  const hasError = touched && error;
  const errorId = `${id}-error`;

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span aria-hidden="true" className="required"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={`input-field${hasError ? ' input-field--error' : ''}`}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? errorId : undefined}
      />
      {hasError && (
        <span id={errorId} className="input-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
