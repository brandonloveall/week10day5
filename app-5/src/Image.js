import React from 'react';
import logo from './logo.svg';

function Image(props) {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
}

export default Image;
