const numbers = [12, 56, 54, 98];
let salary1 = 450; 
salary = 450;


// default parameter 
function calculateSalary(salary1, tax= 0.25, bonus=0){
    const remaining = salary1 - salary1*tax;
    const total = remaining + bonus;
    return total; 
}


// template string
const elementHtml = `
    <div>
        <h3>Name: </h3>
        <h3>Address: </h3>
        <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
        <p>Others: </p>
    </div>
`

// arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary1, tax, bonus) => salary1 - salary1 * tax + bonus;

// spread
const ages = [12,34,54,16];
const newAges = [...ages, 22, 24, 13];

// destructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'shakib al hasan', salary: '4000000'}
const [a, b, ...r] = [12, 24, 33, 54, 66, 445,]