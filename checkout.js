document.getElementById('dropdownButton').addEventListener('click', function() {
    var emailInputField = document.getElementById('emailInputField');
    emailInputField.style.display = emailInputField.style.display === "none" ? "block" : "none";
});

document.getElementById('addressDropdownButton').addEventListener('click', function() {
    var addressInputFields = document.getElementById('addressInputFields');
    addressInputFields.style.display = addressInputFields.style.display === "none" ? "block" : "none";
});

document.getElementById('paymentDropdownButton').addEventListener('click', function() {
    var paymentInputFields = document.getElementById('paymentInputFields');
    paymentInputFields.style.display = paymentInputFields.style.display === "none" ? "block" : "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const orderSummaryBox = document.querySelector('.order-summary-box2');

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let subtotal = 0;

    cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price;
    });

    const shipping = 0;
    const tax = subtotal * 0.06;
    const total = subtotal + tax;

    orderSummaryBox.innerHTML = `
        <p class="bold-text">Subtotal: $${subtotal.toFixed(2)}</p>
        <p class="bold-text">Shipping: Free</p>
        <p class="bold-text">Tax: $${tax.toFixed(2)}</p>
        <hr class="black-line">
        <p class="bold-text">Total: $${total.toFixed(2)}</p>
    `;
});
