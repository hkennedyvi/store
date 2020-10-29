import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About from '../components/About';
import Shipping from '../components/Shipping';

function AboutPage () {
    return (
        <div>
            <NavBar />
            <About />
            <Shipping />
            <Footer />
        </div>
    )
}

export default AboutPage;