import React from "react";
import "./About.css";
import Header from "../HeaderPage/Header";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 className="heading">Our Team</h2>
      <div className="rowTeam">
        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="ASSETS/images/Team1.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Hamza Ali</h2>
              <p className="titleTeam">CEO & Founder</p>
              <p>He built the Store in 2001 as a CEO & Founder.</p>
              <p>Hamza@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="ASSETS/images/Team1.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Miss Ross</h2>
              <p className="titleTeam"> Director</p>
              <p>She has been working as a Directer since 2005.</p>
              <p>Ross@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="ASSETS/images/Team1.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Miss Sofia</h2>
              <p className="titleTeam">Designer</p>
              <p>She has been working as a Designer since 2005.</p>
              <p>Sofia@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
