import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
         <AboutPage />
        </Route>
        <Route exact path="/shop">
         <ShopPage />
        </Route>
        <Route exact path="/contact">
         <ContactPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
