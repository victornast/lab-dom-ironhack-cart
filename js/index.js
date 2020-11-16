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
  myParent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnCollection = document.getElementsByClassName('action');
  for (button of removeBtnCollection) {
    button.addEventListener('click', removeProduct);
  }
});
