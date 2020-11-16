// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalValue = price.innerHTML * quantity.value;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalValue;
  return subtotalValue;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProductsInCart = document.getElementsByClassName('product');
  let priceAllProducts = 0;
  for (product of allProductsInCart) {
    priceAllProducts += updateSubtotal(product);
  }
  // ITERATION 3
  //... your code goes here
  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.innerHTML = priceAllProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const myParent = target.closest('.product');
  console.log(myParent);
  myParent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductNameInput = document.querySelectorAll(
    '.create-product input'
  )[0];
  const newProductName = newProductNameInput.value;
  if (newProductName === '') return;
  const newProductPriceInput = document.querySelectorAll(
    '.create-product input'
  )[1];
  const newProductPrice = newProductPriceInput.value;

  //add new product
  const productList = document.querySelector('#cart tbody');
  const myNewProduct = document.createElement('tr');
  myNewProduct.classList.add('product');
  myNewProduct.innerHTML = `
  <td class="name"><span>${newProductName}</span></td>
  <td class="price">$<span data-price>${newProductPrice}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>`;

  console.log(myNewProduct);
  productList.appendChild(myNewProduct);
  //reset input
  newProductNameInput.value = '';
  newProductPriceInput.value = 0;
  calculateAll();
  newRmvBtn = productList.querySelector('tr:last-child .btn-remove');
  // console.log(newRmvBtn);
  newRmvBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnCollection = document.getElementsByClassName('btn-remove');
  for (button of removeBtnCollection) {
    button.addEventListener('click', removeProduct);
  }

  //Iteration 5
  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
});
