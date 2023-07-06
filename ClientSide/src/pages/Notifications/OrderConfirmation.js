import React from 'react';
import './OrderConfirmation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <h1 className="order-confirmation-title">Order Confirmation</h1>
      <div className="order-confirmation-content">
        <p className="order-confirmation-message">Thank you for your order! We have received your payment and will process your order shortly.</p>
        <p className="order-confirmation-message">An email with the order details has been sent to your registered email address.</p>
        <p className="order-confirmation-message">If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
      </div>
   <Link to='/products'> <button className="order-confirmation-button">Continue Shopping</button></Link>  
    </div>
  );
};

export default OrderConfirmation;
