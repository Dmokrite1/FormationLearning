import { displayingModalAndButtons } from './displayedElements';
const openModal = (string, btnAndmodal) => {
  const {
    btnOpenModal,
    btnOpenCategory,
    modal,
    addCategory,
    addProduct,
    newProduct,
    newCategory,
  } = btnAndmodal;
  btnOpenModal.style.display = 'none';
  btnOpenCategory.style.display = 'none';
  if (string === 'category') {
    modal.innerHTML = newCategory;
    addCategory();
  }
  if (string === 'product') {
    modal.innerHTML = newProduct;
    addProduct();
  }
};

export const closeModal = (btnAndmodal) => {
  const { btnOpenModal, btnOpenCategory, modal } = btnAndmodal;
  const btnCloseModal = document.querySelector('.btnCloseModal');
  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
  });
};

export const openProductForm = (btnAndmodal) => {
  const { btnOpenModal } = btnAndmodal;
  btnOpenModal.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('product', btnAndmodal);
  });
};

export const openCategoryForm = (btnAndmodal) => {
  const { btnOpenCategory } = btnAndmodal;
  btnOpenCategory.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('category', btnAndmodal);
  });
};
