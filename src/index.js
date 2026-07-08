import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { BookingProvider } from './context/BookingContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BookingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
