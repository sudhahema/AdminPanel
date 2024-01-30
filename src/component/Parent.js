
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [initial, setInitial] = useState(0);

  const updateFromChild = (Value) => {
    console.log(Value); 
  };

  return (
    <div>
      <Child setInitial={updateFromChild} />
    </div>
  );
};

export default Parent;
