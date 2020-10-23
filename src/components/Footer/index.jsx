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
      <div className="footer-middle">
        <div className="footer-text">
          <p>Find us on social</p>
        </div>
        <div className="footer-icons-container">
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
      <div>
        <p className="newsletter-label">
          Sign up for our newsletter:
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