import React, { useState } from 'react';
import './navbar.scss';

function NavBar() {

    const [navBarExpanded, setNavBarExpanded] = useState(false);

    function toggleNavBar(e) {
        e.preventDefault();
        setNavBarExpanded(!navBarExpanded);
    }
    return (
      <nav className={navBarExpanded ? "navbar-expand" : "navbar"} >
          <button className="nav-burger" onClick={toggleNavBar}>
              <div className="burger-top"></div>
              <div className="burger-middle"></div>
              <div className="burger-bottom"></div>
          </button>
      </nav>
    );
  }
  
  export default NavBar;