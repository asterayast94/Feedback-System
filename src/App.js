import React from 'react';

import * as React from 'react';
import './style.css';
import Login from './login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './login';
import Home from './home';
import Goats from './Pages/Goats';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navigation/Navbar.js';
// import Sheeps from './Pages/Sheeps';
// import Goats from './Pages/Goats';

export default function App() {
  return (
    // <Router>
    //   <navbar />
    //   <Switch>
    //     {/* <Route path="/" exact component={Auth} /> */}
    //     <Route path="/sheeps" component={Sheeps} />
    //     <Route path="/goats" component={Goats} />
    //   </Switch>
    // </Router>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />

        <Route path="/goats" component={<Goats />} />

        {/* <Route path="/goats" component={Goats} /> */}
        {/* <Route path="/" element={<Auth />} /> */}
      </Routes>
    </BrowserRouter>

    // <div>
    //   <h1>Hello StackBlitz!</h1>
    //   <Auth>

    //   <p>Start editing to see some magic happen :)</p>
    // </div>
  );
}
