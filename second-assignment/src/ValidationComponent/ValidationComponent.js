import React from 'react';

const validationComponent = (props) => {
  const stringLength = props.textLength;
  var text = null;
  if (stringLength >= 5) {
    text = "Text long enough"; 
  } else {
    text = "Text too short";
  }

  return (
    <p>{text}</p>
  );
}

export default validationComponent;