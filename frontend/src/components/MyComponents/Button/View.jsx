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
    <div className="p-8 border-solid border-4 flex flex-col sm:flex-row">
      <button className="bg-blue-400 p-4 border-solid border-red-700 border-4" onClick={() => setState(state + 1)}>
        Counter: {state}
      </button>
      <button className="bg-red-300 p-4 border-solid border-green-700 border-4" onClick={() => setState(state + 1)}>
        Counter: {state}
      </button>
    </div>
  );
};

export default View;