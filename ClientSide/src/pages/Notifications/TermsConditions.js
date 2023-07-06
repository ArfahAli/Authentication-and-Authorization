import React from 'react';
import './TermsConditions.css'; // Import custom CSS styles

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec commodo est. Aliquam finibus aliquet est, in tincidunt odio malesuada at. Aenean ullamcorper leo eu ligula aliquam, at tempus purus finibus. </p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use the site.</p>

        <h2>Intellectual Property</h2>
        <p>All content and materials available on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are the property of our company and protected by applicable intellectual property laws.</p>

        <h2>Disclaimer</h2>
        <p>The information provided on this website is for general informational purposes only. We make no warranties of any kind, expressed or implied, about the accuracy, reliability, or suitability of the information contained herein.</p>

        <h2>Changes to Terms and Conditions</h2>
        <p>We reserve the right to modify or update these terms and conditions at any time without prior notice. By continuing to use the site after any revisions, you agree to be bound by the updated terms and conditions.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
