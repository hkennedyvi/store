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
          <p>THANKS FOR VISITING OUR SITE</p>
        </div>
        <div className="footer-icons-container">
          <div className="footer-icon">
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className="footer-icon">
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
      <div>
        Sign up for our newsletter:
        <form action="">
          <input type="text"/>
          <button>GO</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;