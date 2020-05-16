import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <Link to='/'>Login</Link>
          <Link to='/bubble-page'>Bubble Page</Link>
        </div>

      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubble-page' component={BubblePage} />
      </Switch>
      </div>

    </Router>
  );
}

export default App;
