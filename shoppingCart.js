document.addEventListener('DOMContentLoaded', () => {
    // Create a container for cart items if not already present
    const cartItemsContainer = document.querySelector('.cart-items-container') || document.createElement('div');
    cartItemsContainer.className = 'cart-items-container';
    const shoppingCartTitle = document.querySelector('.shopping-cart h1');
    if (!document.querySelector('.cart-items-container')) {
        shoppingCartTitle.insertAdjacentElement('afterend', cartItemsContainer);
    }

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
        orderSummaryBox.innerHTML = ''; // Clear previous content before updating

        // Add each cart item to the order summary
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p class="item-name">${item.title}</p><p class="item-price">${item.price}</p>`;
            orderSummaryBox.appendChild(itemElement);
        });

        // Add subtotal, tax, and total to the order summary
        orderSummaryBox.innerHTML += `
            <hr class="black-line">
            <p class="bold-text">Subtotal: $${subtotal.toFixed(2)}</p>
            <p class="bold-text">Tax: $${tax.toFixed(2)}</p>
            <p class="bold-text">Total: $${total.toFixed(2)}</p>
        `;
    }

    function populateCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear the container before repopulating
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
    }

    if (cart.length > 0) {
        populateCartItems();
        updateOrderSummary();
    }

    // Using event delegation for the delete button functionality
    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.className === 'deleteItemBtn') {
            const itemIndex = parseInt(event.target.getAttribute('data-index'));
            cart.splice(itemIndex, 1); // Remove the item from the cart
            localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage

            populateCartItems(); // Repopulate cart items to reflect the current state
            updateOrderSummary(); // Update the order summary

            if (cart.length === 0) {
                document.querySelector('.cartText').innerText = 'Your shopping cart is empty!';
            }
        }
    });
});
