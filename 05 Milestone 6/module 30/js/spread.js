const max = Math.max(12, 85, 999, 78);
// console.log(max);
const numbers = [12, 85, 999, 98];
const largest = Math.max(...numbers);
console.log(largest);

// const numbers2 = numbers;
const numbers2 = [...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);