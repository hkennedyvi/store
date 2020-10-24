import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul className="footer-nav-container">
          <li className="footer-nav-item">Home</li>
          <li className="footer-nav-item">About</li>
          <li className="footer-nav-item">Shop</li>
          <li className="footer-nav-item">Contact</li>
        </ul>
      </div>
      <div className="footer-main-text">
        <h1>SHOPPER</h1>
      </div>
      <div className="footer-icons-container">
        <p>SOCIAL</p>
        <div className="footer-icons-row">
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
        </div>
        <p>SHIPPING PARTNERS</p>
        <div className="footer-icons-row">
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i className="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
      <div className="newsletter-container">
        <p className="newsletter-label">
          Newsletter signup:
        </p>
        <form action="">
          <input className="newsletter-text-field" placeholder="email@me.com" type="text" />
          <input className="newsletter-submit" type="submit" value="GO" />
        </form>
      </div>
    </div>
  );
}

export default Footer;