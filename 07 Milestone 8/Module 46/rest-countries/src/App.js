import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
  }, [])

  return(
    <div>
      <h1>Visiting every country in the world </h1>
      <h3>Available countries: {countries.length}</h3>
      {
        countries.map(country => <p>{country.name.common}</p>)
      }
    </div>
  )
}

function country(){
  
}
export default App;
