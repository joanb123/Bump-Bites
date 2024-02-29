document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = {
                id: index + 1, // Simple ID for demo purposes
                title: button.closest('.subscriptionBox').querySelector('.subscriptionBoxTitles').innerText,
                price: button.closest('.subscriptionBox').querySelector('.subscriptionBoxText p').innerText.split('\n')[2] // Assuming price is always on the third line
            };
            addToCart(product);
        });
    });

    function addToCart(product) {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart!');
    }
});
