
import React from 'react';

const Child = ({ setInitial }) => {

  const handleClick = () => {
    const Value = 5; 
    setInitial(Value); 
  };

  return (
    <div>
      <button className = "btnPadding" onClick={handleClick}>Update Value</button>
    </div>
  );
};

export default Child;
