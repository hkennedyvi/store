import React from 'react';
import './hero.scss';

function Hero() {

    return (
        <div className="hero">
            <h1 className="header">BIG THINGS ARE HERE</h1>
            <a className="nav-anchor" href="/about">
            <button className="button">LEARN MORE</button>
            </a>
        </div>
    );
}

export default Hero;