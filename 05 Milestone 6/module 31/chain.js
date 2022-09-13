const users = [{id: 1, name: 'abul', job: 'doctor'}]

console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        {id: 1, name: 'kalam', job: 'leader'},
        {id: 2, name: 'balam', job: 'leader'}
    ]
}

const firstJob = data.data[0].job ;
// console.log(firstJob)

const user  = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A Kochukhet Lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka',
    }
}

const userFloor = user.address.street?.third
console.log(userFloor); 