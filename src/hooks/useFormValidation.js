import { useState } from 'react';

// Custom hook for form validation logic
export function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setTouched(
        Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
      );
      if (Object.keys(validationErrors).length === 0) {
        callback(values);
      }
    };
  }

  return { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues };
}
