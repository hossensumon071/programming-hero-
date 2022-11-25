import React from 'react';
import Dail from '../Dial/Dail';

const Display = (props) => {
  return (
    <div style={{border: '2px solid green', margin: '1rem'}}>
      <h2>Display name: {props.name}</h2>
      <p>SO far steps: {props.steps}</p>
      <Dail steps={props.steps}></Dail>
    </div>
  );
};

export default Display;