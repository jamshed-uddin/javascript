const addToCart = () => {
  const productField = document.getElementById("product-field");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";

  showToCart(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const showToCart = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;

  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  //   console.log(storedCart);
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  //   console.log(cart);
  const cartStringified = JSON.stringify(cart);
  //   console.log(cartStringified);
  localStorage.setItem("cart", cartStringified);
};

const showFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  console.log(savedCart);
  for (product in savedCart) {
    const quantity = savedCart[product];
    showToCart(product, quantity);
  }
};

showFromLocalStorage();
