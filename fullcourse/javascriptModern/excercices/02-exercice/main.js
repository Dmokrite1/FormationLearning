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
    /*utilisé Number plutôt que parseint, parsefloat en js*/
    const price = Number(productPriceInput.value);     
    const quantity = Number(productQuantityInput.value, 10);
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

    /*
    *D'autres manières de faire (.some = True or False) ou .find pour recherché un élément ou .filter pour recherché plusieurs résultats
    /const existingProduct = products.find(product => product.name.toLowerCase() === name.toLowerCase());
    */
    
    const existingProduct = products.some(product => product.name.toLowerCase() === name.toLowerCase());

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


/*
let products = [
    { name: 'Pommes', price: 0.5, quantity: 4 },
    { name: 'Bananes', price: 1, quantity: 2 },
    { name: 'Lait', price: 2.49, quantity: 2 },
    { name: 'Pain', price: 2.50, quantity: 1 },
    { name: 'Œufs', price: 5.79, quantity: 1 },
  ];


const displayList = document.getElementById('displayList');
const displayTotal = document.getElementById('displayTotal');
const formModal = document.getElementById('form')

const markup = `
<form style="margin-top: 2em; display: flex; flex-direction: column; width: 10em" name="formProduct">
    <label for="name">Nom</label>
    <input type="text" name="name" id="name">
    <label for="price">Prix</label>
    <input type="number" name="price" id="price">
    <label for="quantity">Quantité</label>
    <input type="number" name="quantity" id="quantity">
    <button id="submit" type="submit" id="addProduct" style="margin-top:1em">Ajouter</button>
</form>
`
let isOpenModalForm = false
const errorText = 'Veuillez remplir tous les champs, sagouin'
const errorProductName = 'Ce produit existe dèjà, poulet!'

const errorDiv = document.createElement('div')
const btnOpenForm = document.createElement('button')

errorDiv.setAttribute('id', 'error')
btnOpenForm.innerText = 'Ajouter un produit'
btnOpenForm.style.marginTop = '1em'
errorDiv.style.color = 'red'
errorDiv.style.marginTop = '1em'
errorDiv.style.marginBottom = '1em'

document.body.appendChild(btnOpenForm)
document.body.appendChild(errorDiv)

//creation de la liste des courses
const list=()=>{
    products.sort((a,b) => a.price-b.price)
            .map(product =>{
                let li = document.createElement('li')//cree un element li par produit
                li.innerHTML = `${product.name} - Prix: ${product.price} € - Quantité: ${product.quantity}`
                return displayList.appendChild(li); //ici on affiche chaque element dans la liste
            })
    const total= products.reduce((total, product)=> total + product.price*product.quantity,0).toFixed(2)
    displayTotal.innerHTML= `Total: ${total} €`
}

//ouvre et ferme la modal 
const openModal=()=>{
    btnOpenForm.addEventListener('click', ()=>{
        isOpenModalForm = !isOpenModalForm; //ici on modifie la boolean soit en true si elle est false, soit en false si elle est true
        if(isOpenModalForm){ //ici on verifie que la boolean est true
            formModal.innerHTML = markup;
            btnOpenForm.innerText = 'Annuler'
            saveForm()
        }
        if(!isOpenModalForm){//ici on verifie que la boolean est false
            formModal.innerHTML = ""
            errorDiv.innerHTML= ""
            btnOpenForm.innerText = "Ajouter un produit"
        }
    })
}


// save le formulaire 
const saveForm=()=>{
   

    const btnSubmit = document.getElementById('submit')
    btnSubmit.addEventListener('click', (e)=>{
        e.preventDefault()
        errorDiv.innerHTML = '';

        const name = document.getElementById("name").value
        const price = Number(document.getElementById("price").value)
        const quantity = Number(document.getElementById("quantity").value)

        //verifie que le nom du produit n'est pas déjà dans la liste
        const isProductNameExist = products.some(product => product.name === name)
        testElementOfTheForm(name, price, quantity, isProductNameExist)       
    })

    
    

    // const formTodata = document.forms.namedItem('formProduct')
    // formTodata.addEventListener('submit', (e)=>{
    //     e.preventDefault()
    //     const newProduct = new FormData(e.target)
    

    /*---------  version longue comme celle de maxime -------*/
    //  const name = newProduct.get('name') 
    //  const price =newProduct.get('price')
    //  const quantity = newProduct.get('quantity')
    //  const isProductNameExist = products.some(product => product.name === name)
    //  testElementOfTheForm(name, price, quantity, isProductNameExist) 
      
    
    //     products.push({ 
    //         name:
    //         String(newProduct.get('name')),
    //         price:Number(newProduct.get('price')),
    //         quantity:Number(newProduct.get('quantity'))
    //     })
//}
/*
refactor 
const testElementOfTheForm=(name, price, quantity, isProductNameExist)=>{
    if(isProductNameExist){
        errorDiv.innerHTML = errorProductName
        return
    }
    if(name==='' || price===0 || quantity ===0){
        errorDiv.innerHTML = errorText
        return
    }

    products.push({name, price, quantity})
    displayList.innerHTML=""
    formModal.innerHTML=""
    btnOpenForm.innerText = 'Ajouter un produit'
    isOpenModalForm = false;
    list()
}

list()
openModal()
*/