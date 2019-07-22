import React from 'react';
import './CharComponent.css'
const charComponent = (props) => {
  return (
    <div className="char-component" onClick={props.click}>{props.character}</div>
  );
}

export default charComponent;