import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul className="footer-nav-container">
          <li className="footer-nav-item">
            <a className="nav-anchor" href="/">
              Home
            </a>
          </li>
          <li className="footer-nav-item">
            <a className="nav-anchor" href="/about">
              About
            </a>
          </li>
          <li className="footer-nav-item">
            <a className="nav-anchor" href="/shop">
              Shop
            </a>
          </li>
          <li className="footer-nav-item">
            <a className="nav-anchor" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-main-text">
        <h1>SHOPPER</h1>
      </div>
      <div className="footer-icons-container">
        <div className="footer-icons-row">
          <div className="footer-icon">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="footer-icon">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="footer-icon">
            <i class="fab fa-facebook"></i>
          </div>
        </div>
        <p>Social</p>
        <div className="footer-icons-row">
          <div className="footer-icon">
            <i class="fas fa-industry"></i>
          </div>
          <div className="footer-icon">
            <i class="fas fa-building"></i>
          </div>
          <div className="footer-icon">
            <i class="fas fa-landmark"></i>
          </div>
        </div>
        <p>Our Partners</p>
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