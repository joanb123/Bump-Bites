document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.className = 'cart-items-container';
    const shoppingCartTitle = document.querySelector('.shopping-cart h1');
    shoppingCartTitle.insertAdjacentElement('afterend', cartItemsContainer);

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    function updateOrderSummary() {
        let subtotal = 0;
        cart.forEach(item => {
            const price = parseFloat(item.price.replace('$', ''));
            subtotal += price;
        });

        const tax = subtotal * 0.06;
        const total = subtotal + tax;

        const orderSummaryBox = document.querySelector('.order-summary-box');
        orderSummaryBox.innerHTML = `
            <p class="bold-text">Subtotal: $${subtotal.toFixed(2)}</p>
            <p class="bold-text">Shipping: Free</p>
            <p class="bold-text">Tax: $${tax.toFixed(2)}</p>
            <hr class="black-line">
            <p class="bold-text">Total: $${total.toFixed(2)}</p>
        `;
    }

    if (cart.length > 0) {
        document.querySelector('.cartText').innerText = '';
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.price}</p>
                <button class="deleteItemBtn" data-index="${index}">Delete</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
        updateOrderSummary();
    }

    document.querySelectorAll('.deleteItemBtn').forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = this.getAttribute('data-index');
            cart.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateOrderSummary();
            location.reload();
        });
    });
});
