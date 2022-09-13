const nayok = {
    name: 'shakib khan',
    id: 12,
    isSingle: true,
    friends: ['Apu', 'Raaz', 'salman', 'amir'],
    movies: [{name: 'no 1',year: '2015'},{name: 'king khan',year: '2018'}],
    act: function(){
        console.log('acting like shakib khan');
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
    }
}

console.log(nayok.car);