document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Extracting product information
            const product = {
                id: Date.now(), // Unique ID using the current timestamp
                title: button.closest('.subscriptionBox').querySelector('.subscriptionBoxTitles').innerText,
                price: button.value // Using the button's value for the price
            };
            addToCart(product);
        });
    });

    function addToCart(product) {
        // Retrieve the existing cart from localStorage, or initialize a new one if it doesn't exist
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push(product); // Add the new product to the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
        alert('Added to cart!'); // Provide feedback to the user
    }
});
