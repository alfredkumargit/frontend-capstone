import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, dispatch, onNewBooking, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect to validate form whenever state changes
  useEffect(() => {
    if (date && time && guests >= 1 && guests <= 10 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'updateTimes', date: newDate });
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleGuestsChange = (e) => {
    const guestsValue = parseInt(e.target.value, 10); // Convert to number
    setGuests(guestsValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooking = { date, time, guests, occasion };
    console.log(newBooking);

    onNewBooking(newBooking); // Pass the booking data to the parent
    submitForm(newBooking); // Call the submit form function
  };

  return (
    <main className='formmain'>
      <form
        
        onSubmit={handleSubmit}
        aria-label="Reservation Form"
      >
        <fieldset style={{ border: 'none', padding: '0', width: '100%' }}>
          <legend style={{ textAlign: 'center', marginBottom: '20px' }}>Make Your Reservation</legend>

          <div style={{ marginBottom: '20px', width: '100%' }}>
            <label htmlFor="res-date" style={{ display: 'block', marginBottom: '5px' }}>Choose date:</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              required
              aria-label="Choose a date for your reservation"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', width: '100%' }}>
            <label htmlFor="res-time" style={{ display: 'block', marginBottom: '5px' }}>Choose time:</label>
            <select
              id="res-time"
              value={time}
              onChange={handleInputChange(setTime)}
              required
              aria-label="Choose a time for your reservation"
              style={{ width: '100%', padding: '8px' }}
            >
              {availableTimes && availableTimes.length > 0 ? (
                availableTimes.map((availableTime, index) => (
                  <option key={index} value={availableTime}>
                    {availableTime}
                  </option>
                ))
              ) : (
                <option value="" disabled>No available times</option>
              )}
            </select>
          </div>

          <div style={{ marginBottom: '20px', width: '100%' }}>
            <label htmlFor="guests" style={{ display: 'block', marginBottom: '5px' }}>Number of guests:</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={handleGuestsChange} // Updated handler for guests
              required
              aria-label="Enter the number of guests"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', width: '100%' }}>
            <label htmlFor="occasion" style={{ display: 'block', marginBottom: '5px' }}>Occasion:</label>
            <select
              id="occasion"
              value={occasion}
              onChange={handleInputChange(setOccasion)}
              required
              aria-label="Select the occasion for your reservation"
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="" disabled>Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </fieldset>

        <div style={{ textAlign: 'center', width: '100%' }}>
          <input
            type="submit"
            value="Make Your Reservation"
            aria-label="Click to submit your reservation"
            disabled={!isFormValid}
            style={{ padding: '10px 20px', fontSize: '16px' }}
          />
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
