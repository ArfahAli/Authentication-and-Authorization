import React, { useState } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import Header from "./../HeaderPage/Header";
import Footer from "./../Footer/Footer";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Access form data using formData object
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className="containerPayment">
        <form onSubmit={handleSubmit}>
          <div className="payment-row">
            <div className="col">
              <h3 className="title">billing address</h3>
              <div className="inputBox">
                <span>full name :</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Arfah Ali"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputBox">
                <span>email :</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputBox">
                <span>address :</span>
                <input
                  type="text"
                  name="address"
                  placeholder="room - street - locality"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputBox">
                <span>city :</span>
                <input
                  type="text"
                  name="city"
                  placeholder="Islamabad"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input
                    type="text"
                    name="state"
                    placeholder="Pakistan"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="123 456"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="title">payment</h3>
              <div className="inputBox">
                <span>cards accepted :</span>
                <img src="ASSETS/images/card_img.png" alt="" />
              </div>
              <div className="inputBox">
                <span>name on card :</span>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Ms. Arfah Ali"
                  value={formData.cardName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputBox">
                <span>credit card number :</span>
                <input
                  type="number"
                  name="cardNumber"
                  placeholder="1111-2222-3333-4444"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputBox">
                <span>exp month :</span>
                <input
                  type="text"
                  name="expMonth"
                  placeholder="january"
                  value={formData.expMonth}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input
                    type="number"
                    name="expYear"
                    placeholder="2022"
                    value={formData.expYear}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="1234"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/OrderConfirmation">
            <input
              type="submit"
              value="proceed to Shipping"
              className="submit-btn"
            />
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
