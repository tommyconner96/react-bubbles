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



        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
      {/* <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route path='/' component={HomePage} />
        </Switch>

      </div> */}

    </Router>
  );
}

export default App;
