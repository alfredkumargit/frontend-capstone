import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div>
      <h1>Make a Reservation</h1>
      <p>Welcome to our reservation page! Please fill out the form below to book your table.</p>

      <BookingForm />

      <p>If you have any special requests or need assistance, please contact us at reservations@example.com.</p>
    </div>
  );
};

export default BookingPage;
