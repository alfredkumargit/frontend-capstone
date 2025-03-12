import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import BookingPage from './components/BookingPage';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import the ConfirmedBooking component

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} /> {/* Add the new route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
