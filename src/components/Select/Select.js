import React from 'react';
import './Select.css';

function Select({ label, id, name, value, onChange, onBlur, options, placeholder, error, touched, required = false }) {
  const hasError = touched && error;
  const errorId = `${id}-error`;

  return (
    <div className="select-group">
      <label htmlFor={id} className="select-label">
        {label}
        {required && <span aria-hidden="true" className="required"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`select-field${hasError ? ' select-field--error' : ''}`}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? errorId : undefined}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {hasError && (
        <span id={errorId} className="select-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Select;
