import React from 'react';
import logo from './logo.svg';
import './App.css';

import router from "./router.js"

import {Link} from "react-router-dom"

function App() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
          <Link to="/signup">Signup</Link>
        </ul>
      </nav>
      <br />

      {router}
    </div>
  );
}

export default App;
