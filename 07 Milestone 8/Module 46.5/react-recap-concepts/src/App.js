import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Noakhali" district="comilla"/>
      <District name="Kishorgonj" district="Dhaka"/>
      <District name="Sylhet" district="Sylhet"/>
      <LoadData/>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'green',
  margin: '4rem auto',
  borderRadius: '2rem',
  textAlign: 'center',
  width: '20rem'
}
function District (props){
  const [power, setPower] = useState(1);
  const boostPower= () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Specialty:{props.district}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

function LoadData (){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);
  return(
    <div>
      <h1>Load Post : {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post (props){
  return(
    <div>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}
export default App;
