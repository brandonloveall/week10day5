import React, {useState} from 'react';
import logo from './logo.svg';

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function clicked(){
    alert(`Username: ${username}\nPassword:${password}`)
  }

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)}></input>
      <input onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={clicked}>Login</button>
    </div>
  );
}

export default App;
