//creer une liste de course avec un objet litteral qui contient une liste de produit avec leur price et leur quantité et une methode qui calcule le total de la liste de course et l'affiche en HTMl, faite un affichage propre

//voici la liste de course:
// products:{
//     fruits:[
//         {product : 'pomme', price : 0.5, quantity: 2},
//         {product : 'poire', price : 0.7, quantity: 3},
//     ],
//     vegetables:[
//         {product : 'carotte', price : 1, quantity: 2},
//         {product : 'patate', price : 5.30, quantity: 1},
//     ],
//     drinks:[
//         {product : 'coca', price : 2.49, quantity: 2},
//         {product : 'orangina', price : 2.25, quantity: 3},
//     ],
import {
  newProduct,
  markup,
  newCategory,
  displayedTable,
  displayedTotal,
  displayingModalAndButtons,
} from './displayedElements';
import { checkFormValues, getFormValues } from './checkFormValues';
import { closeModal, openProductForm, openCategoryForm } from './modal';
import choiceCategory from './choiceCategory';
import { shoppingList } from './shoppingList';

const body = document.querySelector('body');
body.innerHTML = markup;
document.querySelector('.title').innerHTML = shoppingList.title;

const btnOpenModal = document.querySelector('.btnOpenModal');
const btnOpenCategory = document.querySelector('.btnOpenCategory');
const modal = document.querySelector('.modal');
const displayTotal = document.querySelector('.displayTotal');

btnOpenModal.innerHTML = 'Ajouter un produit';
btnOpenCategory.innerHTML = 'Ajouter une catégorie';

const addProduct = () => {
  const formData = document.forms.namedItem('add-product');
  closeModal(btnAndmodal);
  choiceCategory(shoppingList);

  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProduct = new FormData(e.target);
    checkFormValues(newProduct);
    const { category, product, price, quantity } = getFormValues(newProduct);
    shoppingList.products[category].push({ product, price, quantity });
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
    createTable();
    displayedTotal(shoppingList, displayTotal);
  });
};

const addCategory = () => {
  closeModal(btnAndmodal);
  const formData = document.forms.namedItem('add-category');

  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const newCategory = new FormData(e.target);
    const name = newCategory.get('category');
    const categories = Object.keys(shoppingList.products);
    if (categories.includes(name)) {
      alert('Cette catégorie existe déjà');
      return;
    }
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
    shoppingList.products[name] = [];
  });
};

const deleteProduct = () => {
  const btnDeleteProduct = document.querySelectorAll('.btn-delete');
  btnDeleteProduct.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productLine = e.target.parentNode.parentNode;
      const category = productLine.children[0].innerHTML;
      const productName = productLine.children[1].innerHTML;
      const index = shoppingList.products[category].findIndex(
        (p) => p.product === productName,
      );
      shoppingList.products[category].splice(index, 1);
      createTable();
      displayedTotal(shoppingList, displayTotal);
    });
  });
};

const btnAndmodal = {
  btnOpenModal,
  btnOpenCategory,
  modal,
  addCategory,
  addProduct,
  newProduct,
  newCategory,
}; //ici nous avons trop d'argument on evite de faire cela en general

const createTable = () => {
  const productBody = document.querySelector('.tbody');
  productBody.innerHTML = '';
  shoppingList.total();
  const productList = Array.from(Object.values(shoppingList.products)); // cree un array de array de chaque categories
  console.log(productList);
  const pl = productList
    .flatMap((products, index) => {
      products.category = Object.keys(shoppingList.products)[index]; // on recupere le nom de la categorie
      products.map((product) => {
        product.category = products.category; // on insere dnas le nouveau tableau le nom de la categorie sur chaque produit
        console.log(products.category);
        return product;
      });
      return products;
    })
    .map((p, index) => {
      p.subTotal = shoppingList.subTotal()[index]; // on insere dans le nouveau tableau le sous total de chaque produit
      return p;
    })
    .sort((productA, productB) =>
      productA.category.toLowerCase().localeCompare(productB.category.toLowerCase()),
    );
  console.log(pl);
  displayedTable(pl, productBody);
  displayedTotal(shoppingList, displayTotal);
  deleteProduct();
};

//Affichage
createTable();
openProductForm(btnAndmodal);
openCategoryForm(btnAndmodal);

//
