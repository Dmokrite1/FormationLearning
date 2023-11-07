const ressourceTable = ['category', 'product', 'price', 'quantity'];

export const checkFormValues = (newProduct) => {
  const values = ressourceTable.map((ressource) => {
    const value = newProduct.get(ressource);
    return errorTest(value, `.${ressource}-error`, ressource);
  });
  if (values.some((v) => v === undefined)) {
    return;
  }
};

const errorTest = (ressource, selector, input) => {
  const errorDiv = document.querySelector(selector);
  if (!ressource) {
    errorDiv.innerText = `a ${input} was mandatory`;
    return;
  }
  errorDiv.innerText = '';
  return ressource;
};

export const getFormValues = (newProduct) => {
  const category = newProduct.get('category');
  const product = newProduct.get('product');
  const price = Number(newProduct.get('price'));
  const quantity = Number(newProduct.get('quantity'));
  return { category, product, price, quantity };
};
