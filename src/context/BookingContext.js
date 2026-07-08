import React, { createContext, useContext, useReducer } from 'react';

export const BookingContext = createContext();

const initialState = {
  availableTimes: [],
  booking: null,
};

function bookingReducer(state, action) {
  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return { ...state, availableTimes: action.payload };
    case 'SET_BOOKING':
      return { ...state, booking: action.payload };
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}
