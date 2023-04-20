import React, { useState } from 'react';

const Edit = (props) => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <button
        style={{
          backgroundColor: state ? 'papayawhip' : 'violet',
        }}
        onClick={toggleState}
      >
        Click me to change color
      </button>
      <button
        style={{
          backgroundColor: state ? 'papayawhip' : 'violet',
        }}
        onClick={toggleState}
      >
        Click me to change color
      </button>
    </div>
  );
};

export default Edit;