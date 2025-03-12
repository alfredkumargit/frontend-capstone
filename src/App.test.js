import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});