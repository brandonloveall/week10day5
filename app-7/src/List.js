import React, {useState} from 'react';
import Task from "./Task"

function List(props) {
  let list = props.listItems.map((e) => {
    return <Task task={e}/>
  })

  return (
    <div>
      {list}
    </div>
  );
}

export default List;
