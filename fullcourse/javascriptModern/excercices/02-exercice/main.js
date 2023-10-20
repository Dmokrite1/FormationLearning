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

function calculateTotalPrice() {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
    });
    return total;
}

function displayProducts() {
    productList.innerHTML = "";

    products.sort((a, b) => a.price - b.price);

    products.map((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - Prix : ${product.price} €, Quantité : ${product.quantity}`;
        productList.appendChild(listItem);
    });

    const total = calculateTotalPrice();
    totalPriceElement.textContent = total + " €";
}

function addProduct() {
    const name = productNameInput.value.charAt(0).toUpperCase() + productNameInput.value.slice(1).toLowerCase();
    const price = parseFloat(productPriceInput.value);
    const quantity = parseInt(productQuantityInput.value, 10);

    if (!name || isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
        alert("Veuillez saisir des valeurs valides pour le produit.");
        return;
    }

    const existingProduct = products.find(product => product.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
        alert("Le produit existe déjà dans la liste de courses.");
    } else {
        products.push({ name, price, quantity });
    }

    displayProducts();
    productNameInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";
}

addProductButton.addEventListener("click", addProduct);

displayProducts();


