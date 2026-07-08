import React from 'react';
import './RadioGroup.css';

function RadioGroup({ legend, name, value, onChange, options, error, touched, required = false }) {
  const hasError = touched && error;
  const errorId = `${name}-error`;

  return (
    <fieldset className="radio-group">
      <legend className="radio-legend">
        {legend}
        {required && <span aria-hidden="true" className="required"> *</span>}
      </legend>
      <div className="radio-options">
        {options.map((opt) => (
          <label key={opt.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              required={required}
              className="radio-input"
            />
            <span className="radio-custom" />
            {opt.label}
          </label>
        ))}
      </div>
      {hasError && (
        <span id={errorId} className="radio-error" role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}

export default RadioGroup;
