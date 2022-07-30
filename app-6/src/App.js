import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")
  let [display, setDisplay] = useState([])

  function updateList(){
    setList([...list, input])
    list.forEach(element => {
      setDisplay([...display, <List text={input}/>])
    })
  }

  return (
    <div>
      <h1>My to-do list:</h1>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={updateList}>Add</button>
      {display}
    </div>
  );
}

export default App;
