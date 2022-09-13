const numbers = [12, 5, 23, 45, 11, 18, 8, 556, 67 ];

const fives = numbers.find(num => num % 5 === 0);
const fiveALl = numbers.filter( num => num % 5 === 0);

const products = [
    {id: 1, name: 'laptop', price: 450000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 4500},
    {id: 1, name: 'tablet', price: 23000},
]

const cheap = products.find(p => p.price < 400000)