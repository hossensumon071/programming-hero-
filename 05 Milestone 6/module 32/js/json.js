const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
// Javascript object notation
console.log(user);

const stringified = JSON.stringify(user);


const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet bhuter goli',
        city: 'ranbir',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen: true,
    isNew: false, 
}

const shopJson = JSON.stringify(shop);
const shopObj = JSON.parse(shopJson)