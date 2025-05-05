import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ContactForm from "./Pages/ContactForm";
import AboutUs from "./Pages/AboutUs";
import BookingPage from "./Pages/BookingPage";
import BookingForm from "./Pages/BookingForm";
import ManageBooking from "./Pages/ManageBooking";
import ManageBookingForm from "./Pages/ManageBookingForm";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PricingPage from "./Pages/Pricing";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/Manage-booking" element={<ManageBooking />} />
        <Route path="/Manage-booking-Form" element={<ManageBookingForm />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
