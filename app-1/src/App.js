import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, changeText] = useState("")

  return (
    <div>
      <input onChange={(e) => changeText(e.target.value)}></input>
      <h2>{text}</h2>
    </div>
    
  );
}

export default App;
