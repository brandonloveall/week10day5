import React, {useState} from 'react';

function NewTask(props) {

  const [input, setInput] = useState("")
  
  function addTask(){
    props.addTask(input)
  }

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default NewTask;
