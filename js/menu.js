let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cartItems", JSON.stringify(cart)); 
  alert(`${name} added to your order!`);
}
function goToPayment() {
  if (cart.length === 0) {
    alert("Please add at least one item to your order!");
    return;
  }
  window.location.href = "checkout.html";
}