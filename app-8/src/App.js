import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [luke, setLuke] = useState("")

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/1")
    .then(res => {
      setLuke(res.data)
      console.log("run 1")
    })
  }, [])

  return (
    <div>
      <h1>Name: {luke.name}</h1>
      <h1>Height: {luke.height}</h1>
    </div>
  );
}

export default App;
