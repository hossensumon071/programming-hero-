

const loadQoute = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data))
}

const displayQoute = quote => {
    const blockquote = document.getElementById('quote');
    console.log(quote)
    blockquote.innerText = quote.quote
}