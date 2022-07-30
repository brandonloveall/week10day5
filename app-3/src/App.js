import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [foods, setFoods] = useState(["a", "aa", "aaa", "b", "bb", "bbb"])
  const [filteredFoods, setFilteredFoods] = useState([])

  function filterFoods(string){
    let answer = foods.filter((element) => {
      console.log(element)
      console.log(string)
      return element.includes(string)
    })
    .map((element) => {
      return (<h2>{element}</h2>)
    })

    setFilteredFoods(answer)
  }

  return (


    <div className="App">
      <input onChange={(event) => filterFoods(event.target.value)}></input>
      {filteredFoods}
    </div>
  );
}

export default App;
