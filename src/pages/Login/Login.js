import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required.';
    if (!form.password) newErrors.password = 'Password is required.';
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
  }

  return (
    <section className="login-page">
      <div className="login-inner">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
            required
          />
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </form>
        <p className="login-hint">
          Demo: use any email and password to sign in.
        </p>
      </div>
    </section>
  );
}

export default Login;
