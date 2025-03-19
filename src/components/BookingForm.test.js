import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm'; // Make sure the path is correct

describe('BookingForm Component Tests', () => {
  test('renders date input with required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onNewBooking={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('renders guests input with min and max attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onNewBooking={() => {}} submitForm={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders occasion select with required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onNewBooking={() => {}} submitForm={() => {}} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test('enables submit button when form is valid', () => {
    render(<BookingForm availableTimes={['18:00']} dispatch={() => {}} onNewBooking={() => {}} submitForm={() => {}} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2025-03-15' } });
    
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });
    
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByLabelText(/submit reservation/i);
    expect(submitButton).toBeEnabled();
  });

  test('disables submit button when form is invalid', () => {
    render(<BookingForm availableTimes={['18:00']} dispatch={() => {}} onNewBooking={() => {}} submitForm={() => {}} />);
    
    const submitButton = screen.getByLabelText(/submit reservation/i);
    expect(submitButton).toBeDisabled();
  });
});
