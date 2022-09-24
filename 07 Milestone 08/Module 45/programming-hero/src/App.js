import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(30);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
   const increaseCount = () => setCount(count + 1);
   const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUsers () {
  const [users, setUsers] = useState([]);

  useEffect( () => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

export default App;
