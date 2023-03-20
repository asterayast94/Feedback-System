import React from 'react';
import './style.css';
import * as React from 'react';
import './style.css';
import Login from './login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './login';
import Home from './home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />

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
