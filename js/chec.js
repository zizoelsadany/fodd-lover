let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartContainer = document.getElementById('cartItems');
const totalPriceElem = document.getElementById('totalPrice');
function renderCart() {
  cartContainer.innerHTML = '';
  let total = 0;
  if(cart.length === 0){
    cartContainer.innerHTML = '<p>Your cart is empty!</p>';
  } else {
      cart.forEach((item, index) => {
      total += item.price * (item.qty || 1);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <span>${item.name} ($${item.price})</span>
        <input type="number" min="1" value="${item.qty || 1}" onchange="updateQty(${index}, this.value)">
        <button type="button" class="btn btn-danger remove-btn" onclick="removeItem(${index})">Remove</button>`;
        cartContainer.appendChild(div);
    });
  }
  totalPriceElem.innerText = `Total: $${total}`;
}
function updateQty(index, value) {
  cart[index].qty = parseInt(value);
  localStorage.setItem('cartItems', JSON.stringify(cart));
  renderCart();
}function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cart));
  renderCart();
}
renderCart();
const vodafoneExtra = document.getElementById('vodafoneExtra');
const visaExtra = document.getElementById('visaExtra');
const cashExtra = document.getElementById('cashExtra');
document.querySelectorAll('input[name="paymentMethod"]').forEach(el => {
  el.addEventListener('change', function() {
    vodafoneExtra.style.display = this.value === 'Vodafone Cash' ? 'block' : 'none';
    visaExtra.style.display = this.value === 'Visa' ? 'block' : 'none';
    cashExtra.style.display = this.value === 'Cash on Delivery' ? 'block' : 'none';
  });
});
document.getElementById('checkoutForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('customerName').value;
  const phone = document.getElementById('customerPhone').value;
  const address = document.getElementById('customerAddress').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  let total = 0;
  cart.forEach(item => total += item.price * (item.qty || 1));
  alert(`Thank you ${name}!\nTotal: $${total}\nPayment: ${paymentMethod}\nWe will deliver to: ${address}`);
  localStorage.removeItem('cartItems');
  window.location.href = 'index.html';
});
