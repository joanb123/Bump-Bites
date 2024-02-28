document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.className = 'cart-items-container';
    const shoppingCartTitle = document.querySelector('.shopping-cart h1');
    shoppingCartTitle.insertAdjacentElement('afterend', cartItemsContainer);

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    function updateTotalPrice() {
        let totalPrice = 0;

        cart.forEach(item => {
            const price = parseFloat(item.price); // Convert price to a number
            if (!isNaN(price)) { // Only add if price is a number
                totalPrice += price;
            }
        });

        let totalPriceElement = document.querySelector('.total-price');
        if (!totalPriceElement) {
            totalPriceElement = document.createElement('p');
            totalPriceElement.className = 'total-price';
            document.querySelector('.order-summary-box').appendChild(totalPriceElement);
        }

        totalPriceElement.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    if (cart.length > 0) {
        document.querySelector('.cartText').innerText = ''; // Clear the "Your shopping cart is empty!" text
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.price}</p>
                <button class="deleteItemBtn" data-index="${index}">DELETE</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        updateTotalPrice();
    }

    // Event listener for delete buttons
    document.querySelectorAll('.deleteItemBtn').forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = this.getAttribute('data-index');
            cart.splice(itemIndex, 1); // Remove the item from the cart
            localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in localStorage
            location.reload(); // Reload the page to update the cart display
        });
    });
});
