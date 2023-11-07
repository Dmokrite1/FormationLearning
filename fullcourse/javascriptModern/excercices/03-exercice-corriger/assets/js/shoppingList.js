export let shoppingList = {
  title: 'Ma liste de course',
  products: {
    fruits: [
      { product: 'pomme', price: 0.5, quantity: 2 },
      { product: 'poire', price: 0.7, quantity: 3 },
    ],
    vegetables: [
      { product: 'carotte', price: 1, quantity: 2 },
      { product: 'patate', price: 5.3, quantity: 1 },
    ],
    drinks: [
      { product: 'coca', price: 2.49, quantity: 2 },
      { product: 'orangina', price: 2.25, quantity: 3 },
    ],
  },
  // subTotal:() => {
  //     return Object.values(shoppingList.products).flatMap(productType => {
  //         return productType.flatMap(product => {
  //            const subTotal= product.price * product.quantity
  //             return subTotal.toFixed(2);
  //         });
  //     });
  // },
  subTotal: () =>
    Object.values(shoppingList.products).flatMap((productType) =>
      productType.map((product) => (product.price * product.quantity).toFixed(2)),
    ),
  // total:() => {
  //     return Object.values(shoppingList.products).reduce((subTotal, productType) => {
  //         const total = productType.reduce((total, product) => {
  //             return total + product.price * product.quantity;
  //         }, 0);
  //         return subTotal + total;
  //     }, 0).toFixed(2);
  // }
  total: () =>
    Object.values(shoppingList.products)
      .reduce(
        (subTotal, productType) =>
          subTotal +
          productType.reduce(
            (total, product) => total + product.price * product.quantity,
            0,
          ),
        0,
      )
      .toFixed(2),
};
