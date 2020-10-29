import React from 'react';
import './hero.scss';

function Hero() {

    return (
        <div className="hero">
            <h1 className="header">BIG THINGS ARE HERE</h1>
            <a className="nav-anchor" href="/about">
                <button className="button">
                    <h3>
                        LEARN MORE
                    </h3>
                </button>
            </a>
        </div>
    );
}

export default Hero;