const numbers = [2,3,4,77,44];
const output = [];

// type-1

 for(number of numbers){
    const double = numbers * 2;
    output.push(double);
}
console.log(output); 



// type-1=2
function getDouble(numbers){
    const output = [];
    for(number of numbers){
        const double = doublIt(number) * 2;
        output.push(double);
    }
    return output;
}

/* 
function doubleItold(number){
    return number * 2
}
*/

const doublIt = num => num * 2; 

const makeDouble = numbers.map(doublIt) // or
const makeDouble1 = numbers.map(num => num * 2)

const result = getDouble(numbers)
console.log(result);