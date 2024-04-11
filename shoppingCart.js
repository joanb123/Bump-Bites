document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items-container') || document.createElement('div');
    cartItemsContainer.className = 'cart-items-container';
    const shoppingCartTitle = document.querySelector('.shopping-cart h1');
    if (!document.querySelector('.cart-items-container')) {
        shoppingCartTitle.insertAdjacentElement('afterend', cartItemsContainer);
    }

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Function to toggle the cart empty message
    function toggleCartEmptyMessage() {
        const emptyCartMessage = document.querySelector('.cartText'); // Assuming '.cartText' is the class for "Your shopping cart is empty!" text
        if (cart.length > 0) {
            emptyCartMessage.style.display = 'none'; // Hide message when cart has items
        } else {
            emptyCartMessage.style.display = 'block'; // Show message when cart is empty
        }
    }

    function updateOrderSummary() {
        let subtotal = 0;
        cart.forEach(item => {
            const price = parseFloat(item.price.replace('$', ''));
            subtotal += price;
        });

        const tax = subtotal * 0.06;
        const total = subtotal + tax;

        const orderSummaryBox = document.querySelector('.order-summary-box');
        orderSummaryBox.innerHTML = '';

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p class="item-name">${item.title}</p><p class="item-price">${item.price}</p>`;
            orderSummaryBox.appendChild(itemElement);
        });

        orderSummaryBox.innerHTML += `
            <hr class="black-line">
            <p class="bold-text">Subtotal: $${subtotal.toFixed(2)}</p>
            <p class="bold-text">Tax: $${tax.toFixed(2)}</p>
            <p class="bold-text">Total: $${total.toFixed(2)}</p>
        `;
    }

    function populateCartItems() {
        cartItemsContainer.innerHTML = '';
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

    toggleCartEmptyMessage(); // Call this function to ensure correct display when page loads

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.className === 'deleteItemBtn') {
            const itemIndex = parseInt(event.target.getAttribute('data-index'));
            cart.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));

            populateCartItems();
            updateOrderSummary();

            toggleCartEmptyMessage(); // Call this function whenever an item is deleted
        }
    });

    // Event listener for the save button
    const saveMessageBtn = document.getElementById('saveMessage');
    saveMessageBtn.addEventListener('click', function(event) {
        alert('Message Saved'); // Display pop-up notification
    });
});
