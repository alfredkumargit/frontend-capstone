import React from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component

const BookingPage = ({ availableTimes, dispatch, onNewBooking, submitForm }) => {
  return (
    <div>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        onNewBooking={onNewBooking} 
        submitForm={submitForm} 
      /> {/* Pass the onNewBooking and submitForm functions */}
    </div>
  );
};

export default BookingPage;
