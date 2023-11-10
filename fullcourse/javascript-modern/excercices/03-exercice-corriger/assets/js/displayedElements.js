const markup = ` 
    <div class="listing">
        <h1 class="title"></h1>
        <table class="shopping-list">
            <thead class="thead">
                <tr class="trhead">
                    <th>Catégorie</th>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Sous-total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="tbody">
                
            </tbody>
        </table>
        <div class="displayTotal"></div>
            <button class="btnOpenModal btn-primary"></button>
            <button class="btnOpenCategory btn-primary"></button>
        <div class="modal"></div>
    </div> 
`;
const newProduct = `
    <div>
        <form class="form-modal" name="add-product" id="add-product">
            <div class="modal-content">
                <h1 class="title-modal">Nouvelle Entrée</h1>
                <div>
                    <label for="category">Catégorie</label>
                    <select name="category" id="category">
                        <option value="">...choisir</option>
                    </select>
                </div>
                <p class="error category-error"></p>
                <div>
                    <label for="product">Nom</label>
                    <input type="text" name="product" id="product">
                </div>
                <p class="error product-error"></p>
                <div>
                    <label for="price">Prix</label>
                    <input type="number" step="0.01" name="price" id="price">
                </div>
                <p class="error price-error"></p>
                <div>
                    <label for="quantity">Quantité</label>
                    <input type="number"  name="quantity" id="quantity">
                </div>
                <p class="error quantity-error"></p>
            </div>
            <div class="modal-footer">
                <button class="btnCloseModal btn-danger">Annuler</button>
                <button class="btnAddProduct btn-primary" type="submit" >Ajouter</button>
            </div>
        </form>
    </div>
`;

const newCategory = `
    <div>
        <form class="form-modal" name="add-category" id="add-category">
            <div class="modal-content">
                <h1 class="title-modal">Nouvelle Catégorie</h1>
                <div>
                    <label for="category">Catégorie</label>
                    <input type="text" name="category" id="category-form">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btnCloseModal btn-danger">Annuler</button>
                <button class="btnAddCategory btn-primary" type="submit" >Ajouter</button>
            </div> 
        </form>
    </div>
`;

const displayedTable = (productList, productBody) => {
  productList.map((product) => {
    const productLine = document.createElement('tr');
    productLine.setAttribute('class', 'product-line');
    productLine.innerHTML = `
            <td>${product.category}</td>
            <td>${product.product}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.subTotal}</td>
            <td>
                <button class="btn btn-delete">X</button>
            </td>`;
    productBody.appendChild(productLine);
  });
}; // variable permmetant d'inséré chaque produit

const displayedTotal = (shoppingList, displayTotal) => {
  console.log(shoppingList.total());
  displayTotal.innerHTML = '';
  displayTotal.innerHTML = `Total: ${shoppingList.total()} €`;
  displayTotal.setAttribute('class', 'total');
}; //pour le total

const displayingModalAndButtons = (modal, btnOpenModal, btnOpenCategory) => {
  modal.innerHTML = '';
  btnOpenCategory.style.display = 'block';
  btnOpenModal.style.display = 'block';
};

export {
  newProduct,
  markup,
  newCategory,
  displayedTable,
  displayedTotal,
  displayingModalAndButtons,
};
