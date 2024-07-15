// src/components/ConfirmationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default ConfirmationPage;
