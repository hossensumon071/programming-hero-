const add = (first, second) => first + second;
const getFullName = (first, second) => first + '' + second;
const multiply = (a, b) => a * b; 

const result = multiply(7, 8)
console.log(result);

const addAll = (a,b,c,d,e,f) => a + b + c + d + e + f ;

// no parameter arrow fucntion
const getPie = () => 3.1416

// one parameter function
const doubleIt = (num) => num * 2; 

// one parameter simple vrsion
const fiveTimes = num => num * 5; 

// multi line arrow function 
// if u want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result; 
}