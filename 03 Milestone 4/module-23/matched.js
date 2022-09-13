const numbers = [65, 80, 70, 100, 20];

for(let i = 0; i <numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}


for (const number of numbers) {
    console.log(number);
}

const products = [
    {id: 1, name: 'nokia phone', price: 2000},
    {id: 2, name: 'xiaomi', price: 22000},
    {id: 3, name: 'ipad pro', price: 39000},
    {id: 4, name: 'mackbook', price: 120000},
    {id: 5, name: 'walton phone', price: 10000},
    {id: 6, name: 'vivo', price: 30000},
    {id: 7, name: 'phone one', price: 19000}
]

for (const product of products){
    console.log(product);
}

function matchProducts(products, search){
    const matched = []; 
    for (const product of products){
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched; 
}

const result = matchProducts(products, 'phone');
console.log(result);