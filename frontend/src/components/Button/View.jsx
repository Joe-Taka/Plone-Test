import React, { useState } from 'react';

const View = (props) => {
  const [state, setState] = useState(1);

  const inlineStyle = {
    backgroundColor: 'papayawhip',
    color: 'black',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="p-8 border-solid border-black border-4">
      <button className="bg-red-200 p-4 border-solid border-red-700 border-4" onClick={() => setState(state + 1)}>
        Counter: {state}
      </button>
      <button className="bg-red-200 p-4 border-solid border-red-700 border-4" onClick={() => setState(state + 1)}>
        Counter: {state}
      </button>
    </div>
  );
};

export default View;