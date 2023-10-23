const productList = document.getElementById("productList");
const totalPriceElement = document.getElementById("totalPrice");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productQuantityInput = document.getElementById("product-quantity");
const addProductButton = document.getElementById("add-product");


let products = [
    { name: 'Pommes', price: 0.5, quantity: 4 },
    { name: 'Bananes', price: 1, quantity: 2 },
    { name: 'Lait', price: 2.49, quantity: 2 },
    { name: 'Pain', price: 2.50, quantity: 1 },
    { name: 'Œufs', price: 5.79, quantity: 1 },
];

const calculateTotalPrice = () => {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
    });
    return total;
}

const displayProducts = () => {
    productList.innerHTML = "";
    
    products.sort((a, b) => a.price - b.price);
    
    products.map((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - Prix : ${product.price} €, Quantité : ${product.quantity}`;
        productList.appendChild(listItem);
    });

    const total = calculateTotalPrice();
    totalPriceElement.textContent = total + " €";
}

const addProduct = () => {
    const name = productNameInput.value.charAt(0).toUpperCase() + productNameInput.value.slice(1).toLowerCase();
    const price = parseFloat(productPriceInput.value);
    const quantity = parseInt(productQuantityInput.value, 10);
    const nameError = document.getElementById("name-error");
    const priceError = document.getElementById("price-error");
    const quantityError = document.getElementById("quantity-error");
    const existingError = document.getElementById("existing-error");

    if (!name) {
        nameError.textContent = "Veuillez saisir un nom valide pour le produit.";
        return;
    } else {
        nameError.textContent = "";
    } 

    if (isNaN(price) || price < 0) {
        priceError.textContent = "Veuillez saisir un prix valide pour le produit.";
        return;
    } else {
        priceError.textContent = "";
    }

    if (isNaN(quantity) || quantity < 0) {
        quantityError.textContent = "Veuillez saisir une quantité valide pour le produit.";
        return;
    } else {
        quantityError.textContent = "";
    }

    const existingProduct = products.find(product => product.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
        existingError.textContent = "Le produit existe déjà dans la liste de courses.";
        return;
    } else {
        products.push({ name, price, quantity });
        existingError.textContent = "";
    }

    displayProducts();
    productNameInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";
}

addProductButton.addEventListener("click", addProduct);

displayProducts();
