const numbers = [12, 56,87, 44];
const half = numbers.map(n => n/2);
const third = numbers.map(x => x*3); 
console.log(half);


const friends = ['rakib', 'sakib', 'mofiz', 'abul'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 450000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 4500},
    {id: 1, name: 'tablet', price: 23000},
]

const item = products.map(product => product.name);
const price = products.map(p => p.price);