// BookingProvider.js
import React, { useState } from 'react';
import BookingContext from './bookingContext';
import { initialBookingState } from './initialState';

const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(initialBookingState);

  const value = {
    booking,
    setBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;