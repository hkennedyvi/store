import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <NavBar />
    <Hero />
    <About />
    {/* <Main />   */}
    <Footer />
    </div>
  );
}

export default App;
