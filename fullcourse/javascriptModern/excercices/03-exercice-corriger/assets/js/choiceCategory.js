export default function (shoppingList) {
  let category = document.getElementById('category');
  const categories = Object.keys(shoppingList.products);
  categories.map((c) => {
    const option = document.createElement('option');
    option.setAttribute('value', c);
    option.innerHTML = c;
    category.add(option);
    return c;
  });
}
