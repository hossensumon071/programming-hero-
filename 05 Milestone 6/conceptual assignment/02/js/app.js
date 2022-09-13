
const loadAllProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    return data
}

const setAllMenu = async() => {
    // console.log(loadAllProducts());
    // loadAllProducts()
    // .then(data => console.log(data))

    const data = await loadAllProducts();

    const allMenu = document.getElementById('all-menu');
    for(product of data){
        const li  = document.createElement('li')
        li.innerHTML = `<a>${product.category}</a>`;
        allMenu.appendChild(li)
    }
    
}

setAllMenu()
// loadAllProducts()