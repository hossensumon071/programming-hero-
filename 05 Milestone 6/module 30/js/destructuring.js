const fish = {
    name: 'King Hilsha',
    address: 'chandpur',
    color: 'silver',
    phone: '01738434332',
    price: 4000,
}

// const {name, address, color, phone, price} = {name: 'King Hilsha',address: 'chandpur',color: 'silver', phone: '01738434332',price: 4000,}
const {name, address, color, phone, price } = fish


// array distructuring
const [first, second] = [10, 20, 30, 67, 45];
const nayoks = ['shakib', 'bappa', 'amir', 'jayed']
const [first1, second2, third] = nayoks;


function getNames() {
    return ['alim', 'halim']
}

const [baba, chacha] = getNames()