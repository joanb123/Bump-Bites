document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productText = button.closest('.subscriptionBox').querySelector('.subscriptionBoxText p').innerText;
            let priceText = productText.split('\n').pop();
            let price = priceText.trim();

            let priceMatch = price.match(/\$\d+/);
            if (priceMatch) {
                price = priceMatch[0];
            }

            const product = {
                id: index + 1,
                title: button.closest('.subscriptionBox').querySelector('.subscriptionBoxTitles').innerText,
                price: price
            };
            addToCart(product);
            window.location.href = 'shoppingCart.html';
        });
    });

    function addToCart(product) {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
