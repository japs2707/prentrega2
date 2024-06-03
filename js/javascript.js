document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');

    function renderProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Agregar al Carrito</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

    function addToCart(id, name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id, name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        function addToCart(id, name, price) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ id, name, price });
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
        
        renderCart();
    }

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    function clearCart() {
        localStorage.removeItem('cart');
        renderCart();
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);
            addToCart(id, name, price);
        }
    });

    clearCartBtn.addEventListener('click', clearCart);

    renderProducts();
    renderCart();
});
