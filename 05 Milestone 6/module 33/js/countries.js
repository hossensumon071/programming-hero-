

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital? country.capital[0] : 'No capital'}</p>
            <button onclick="loadCountriesDetails('${country.cca2}')">Display Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
}

const loadCountriesDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get countries details', code)
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    // console.log(country)
    const countryDetails = document.getElementById('country-detail')
    countryDetails.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}"/>
    `
}

loadCountries()