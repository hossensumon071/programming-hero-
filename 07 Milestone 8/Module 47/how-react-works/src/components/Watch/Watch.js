import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }
  useEffect( () => {
    console.log(steps);
  }, [steps])
  return (
    <div style={{border: '2px solid black', margin: '1rem', textAlign: 'center'}}>
      <h2>This is my smart watch</h2>
      <h3>My current steps: {steps}</h3>
      <button onClick={increaseSteps}>De Dur</button>
      <Display name="garmin" steps={steps}></Display>
    </div>
  );
};

export default Watch;