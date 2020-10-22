import React from 'react';
import './about.scss';
import ShoesImage from '../../assets/painted_vans.jpg';

function About() {

    return (
        <div className="about">
            <div className="about-image-container">
                <img className="about-image" src={ShoesImage} />
            </div>
            <div className="about-blurb-container">
                <h1 className="about-blurb-header">OH YEAH!</h1>
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
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}

export default About;