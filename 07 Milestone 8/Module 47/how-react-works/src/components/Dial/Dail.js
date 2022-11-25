import React from 'react';

const Dail = (props) => {
  return (
    <div style={{border: '2px solid blue', margin: '1rem'}}>
      <h3>This is Dail</h3>
      <p>steps so far: {props.steps}</p>
    </div>
  );
};

export default Dail;