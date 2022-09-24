// How to declare variable using let and const
const fatherName = 'Arnold';
let season = 'reany';
season = 'winter';


// 6 Basic conditions >, <, ===, !==, <=, >=;
// multiple conditions: &&, ||

if(fatherName === 'Arnold'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. Array declare 
// index
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);

// 6. object
// 3. ways to access property by name 

const student = {
    name: 'salib Khan',
    age: 32, 
    movies: ['King Khan', 'Dhakar Mastan']
}

const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']) // access via property name string
console.log(student[myVariable]) // access via property name in a variable 