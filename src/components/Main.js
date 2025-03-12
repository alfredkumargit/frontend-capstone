import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import BookingTable from './BookingTable'; // Import the BookingTable component
import { fetchAPI, submitAPI } from '../api'; // Adjusted import path

// Initialize availableTimes using fetchAPI for today's date
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Update availableTimes based on selected date using fetchAPI
export const updateTimes = (state, action) => {
  if (action.type === 'updateTimes') {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

// Helper function to load booking data from local storage
const loadBookingData = () => {
  const data = localStorage.getItem('bookingData');
  return data ? JSON.parse(data) : [];
};

// Helper function to save booking data to local storage
const saveBookingData = (data) => {
  localStorage.setItem('bookingData', JSON.stringify(data));
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookingData, setBookingData] = useState(loadBookingData()); // Load booking data from local storage
  const navigate = useNavigate();

  // Save booking data to local storage whenever it changes
  useEffect(() => {
    saveBookingData(bookingData);
  }, [bookingData]);

  const handleNewBooking = (newBooking) => {
    setBookingData((prevBookingData) => [...prevBookingData, newBooking]); // Update booking data with new reservation
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation');
    } else {
      alert('Reservation failed. Please try again.');
    }
  };

  console.log('Main component availableTimes:', availableTimes);
  console.log('Main component bookingData:', bookingData);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <BookingTable bookingData={bookingData} /> {/* Render the BookingTable component first */}
      <div style={{ marginBottom: '10vh' }}></div> {/* Reduce space */}
      <BookingPage 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        onNewBooking={handleNewBooking} 
        submitForm={submitForm} 
      /> {/* Pass the handleNewBooking and submitForm functions */}
    </div>
  );
};

export default Main;
