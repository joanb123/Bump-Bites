document.addEventListener('DOMContentLoaded', () => {
    // Select the container where the cart items should be displayed
    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.className = 'cart-items-container';
    const shoppingCartTitle = document.querySelector('.shopping-cart h1');
    shoppingCartTitle.insertAdjacentElement('afterend', cartItemsContainer);

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if (cart.length > 0) {
        document.querySelector('.cartText').innerText = ''; // Clear the "Your shopping cart is empty!" text
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.price}</p>
                <button class="deleteItemBtn" data-index="${index}">Delete</button>
            `;
            cartItemsContainer.appendChild(itemElement); // Append to the new container
        });
    } else {
    }

    // Add event listener for delete buttons
    document.querySelectorAll('.deleteItemBtn').forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = this.getAttribute('data-index');
            cart.splice(itemIndex, 1); // Remove the item from the cart
            localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in localStorage
            location.reload(); // Reload the page to update the cart display
        });
    });
});
