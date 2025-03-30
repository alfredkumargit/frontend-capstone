import React from 'react';

const BookingTable = ({ bookingData }) => {
  // Only render the table if there is at least one booking
  if (!bookingData || bookingData.length === 0) {
    return null; // Return nothing if no booking data is available
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Time</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Guests</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.map((booking, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.date}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.time}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.guests}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
