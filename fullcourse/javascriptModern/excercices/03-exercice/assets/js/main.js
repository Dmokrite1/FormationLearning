let list = {
    title: 'Ma liste de course',
    products:{
        fruits:[
            {product : 'pomme', price : 0.5, quantity: 2},
            {product : 'poire', price : 0.7, quantity: 3},
        ],
        vegetables:[
            {product : 'carotte', price : 1, quantity: 2},
            {product : 'patate', price : 5.30, quantity: 1},
        ],
        drinks:[
            {product : 'coca', price : 2.49, quantity: 2},
            {product : 'orangina', price : 2.25, quantity: 3},
        ],
    },
    subTotal: ()=>{
        return Object.values(list.products)
    }

};

const productList = document.getElementById('productList');

const headerRow = document.createElement('tr');

const categoryHeader = document.createElement('th');
categoryHeader.textContent = 'Catégorie';

const productHeader = document.createElement('th');
productHeader.textContent = 'Produit';

const priceHeader = document.createElement('th');
priceHeader.textContent = 'Prix';

const quantityHeader = document.createElement('th');
quantityHeader.textContent = 'Quantité';

const subtotalHeader = document.createElement('th');
subtotalHeader.textContent = 'Sous-Total';


headerRow.appendChild(categoryHeader);
headerRow.appendChild(productHeader);
headerRow.appendChild(priceHeader);
headerRow.appendChild(quantityHeader);
headerRow.appendChild(subtotalHeader);

productList.appendChild(headerRow);

for (const category in list.products) {
    const categoryTitle = document.createElement('tr');
    productList.appendChild(categoryTitle);

    list.products[category].forEach((product) => {
        
        const row = document.createElement('tr');
        const categoryCell = document.createElement('td');
        categoryCell.textContent = category;
        const nameCell = document.createElement('td');
        nameCell.textContent = product.product;
        const priceCell = document.createElement('td');
        priceCell.textContent = product.price + ' €';
        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity;
        const subtotalCell = document.createElement('td');
        subtotalCell.textContent = (product.price * product.quantity) + ' €';

        row.appendChild(categoryCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(subtotalCell);

        productList.appendChild(row);
    });
}

