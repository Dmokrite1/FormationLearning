const ressourceTable = ['category', 'product', 'price', 'quantity'];

export const checkFormValues = (newProduct) => {
  const values = ressourceTable.map((ressource) => {
    const value = newProduct.get(ressource);
    return errorTest(value, `.${ressource}-error`, ressource);
  });
  const isOk= values.some((v) => v === undefined)
  console.log(isOk)
  if (isOk) {
    return this.checkFormValues(newProduct);
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
