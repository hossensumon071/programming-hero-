
const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById("product-name-field");
    const quantity = getInputValueById("product-quantity-field")
    // console.log(product);
    // console.log(quantity);

    // display product on UI 
    displayProducts(product, quantity)

    // set to a local storage
    // localStorage.setItem(product, quantity)

    saveItemToLocalStorage(product, quantity)
}

const getShoppingCartFromLocalStorage = () => {
    let savedcart = localStorage.getItem('cart');
    let cart = {};
    if(savedcart) {
        cart = JSON.parse(savedcart)
    }
    return cart; 
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage(); 

    cart[product] = quantity; 
    const cartStringfied = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringfied)
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
    

}