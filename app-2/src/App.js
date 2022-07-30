import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let array = [1,2,3,4,5]
  let answer = []


  function mapArray(){
    array.forEach((e, i) => {
      answer[i] = (<h2>{e}</h2>)
    })
  }

  return (
    
    <div className="App">
      {mapArray()}
      {answer}
    </div>
  );
}

export default App;
