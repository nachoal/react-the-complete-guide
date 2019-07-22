import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
  return (
    <div className="UserOutput" style={props.style}>
      <h2>{props.username}:</h2>
      <p>{props.firstParagraph}</p>
      <p>{props.secondParagraph}</p>
    </div>
  );
}

export default userOutput;