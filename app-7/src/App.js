import React, {useState} from 'react';
import List from "./List"
import NewTask from "./NewTask.js"

function App() {
  const [list, setList] = useState(["firstitem"])

  function addNewTask(task){
    setList([...list, task])
  }


  return (
    <div>
      <h1>List:</h1>
      <NewTask addTask={addNewTask}/>
      <List listItems={list}/>
    </div>
  );
}

export default App;
