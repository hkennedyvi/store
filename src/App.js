import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
         <Shop />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
