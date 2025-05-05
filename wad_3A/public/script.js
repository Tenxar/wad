let cart = [];
let cartCount = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${product} has been added to your cart!`);
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
