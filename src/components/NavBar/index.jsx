import React, { useState } from 'react';
import './navbar.scss';

function NavBar() {

    const [navBarExpanded, setNavBarExpanded] = useState(false);
    const [burgerStatus, setBurgerStatus] = useState('closed');

    function toggleNavBar(e) {
        e.preventDefault();
        setNavBarExpanded(!navBarExpanded);
        setBurgerStatus(burgerStatus === 'open' ? 'closed' : 'open')
    }
    return (
      <nav className={navBarExpanded ? "navbar-expand" : "navbar"} >
          <button className="nav-burger" onClick={toggleNavBar}>
              <div className={`burger-line ${burgerStatus}`}></div>
              <div className={`burger-line ${burgerStatus}`}></div>
              <div className={`burger-line ${burgerStatus}`}></div>
          </button>
      </nav>
    );
  }
  
  export default NavBar;