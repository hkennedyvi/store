import React from 'react';
import './about.scss';
import ShoesImage from '../../assets/painted_vans.jpg';

function About() {

    return (
        <div className="about">
            <div className="about-image-container">
                <img className="about-image" src={ShoesImage} alt="shoes" />
            </div>
            <div className="about-blurb-container">
                <div className="about-circle-frame">
                    <h1 className="about-blurb-header">
                        Look no further
                    </h1>
                </div>
                <p className="about-blurb-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="about-icons-container">
                    <i className="fas fa-box"></i>
                    <i className="fas fa-shipping-fast"></i>
                    <i className="fas fa-box-open"></i>
                </div>
            </div>
        </div>
    );
}

export default About;