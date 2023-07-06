import React from "react";
import "./Contactus.css";
import Header from "../HeaderPage/Header";
import Footer from "../Footer/Footer";
const Contactus = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="ContainerContact">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="Info">
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                  </span>
                  <span>
                    2191 NewCity Phase 2<br />
                    Wah Cantt
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa-regular fa-envelope"></i>{" "}
                  </span>
                  <span>arfahali994@gmail.com</span>
                </li>
                <li>
                  <span>
                    <i class="fa-solid fa-phone"></i>{" "}
                  </span>
                  <span>03105026542</span>
                </li>
              </ul>
              <ul className="sci">
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-square-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-pinterest"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i>
                </li>
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="ContactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" name="" required />
                <span>Email Adress</span>
              </div>
              <div className="inputBox w50">
                <input type="number" name="" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea name="" required />
                <span>Write your Message here.... </span>
              </div>
              <div className="inputBox w100">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contactus;
