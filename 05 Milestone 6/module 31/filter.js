const numbers = [12, 5, 23, 45, 11, 18, 8, 556, 67 ];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const evenNumber = numbers.filter(n => n%2 === 0);


const products = [
    {id: 1, name: 'laptop', price: 450000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 4500},
    {id: 1, name: 'tablet', price: 23000},
]

const expensive = products.filter(product => product.price > 100000);