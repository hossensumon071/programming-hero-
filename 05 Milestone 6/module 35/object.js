// create object using object literals 
const player = {};
player.name = 'small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat')
}
console.log(player);
player.bat();


const student = {
    name: 'pandey',
    job: 'khai andey',
    ball: function(){
        console.log('thriw the ball')
    },
    salary: 10000,
}


// object constructor 
const person = new object();
console.log(person);

// object create method 
// const item = object.create(null);
// console.log(item);

const atel = Object.create(student);
console.log(atel)


// class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(56)
console.log(person1);


// function
function Car(model, price){
    this.model = model;
    this.price = price
}

const tesla = new Car('elon', 32)