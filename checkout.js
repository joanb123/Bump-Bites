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

    // Clear previous content
    orderSummaryBox.innerHTML = '';

    // Dynamically create and append items to the order summary
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price;

        // Create a div for each item, including item name and price
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <p class="item-name">${item.title}</p>
            <p class="item-price">${item.price}</p>
        `;
        orderSummaryBox.appendChild(itemElement);
    });

    const tax = subtotal * 0.06; // Assuming a tax rate of 6%
    const total = subtotal + tax;

    // Append subtotal, tax, and total to the order summary
    orderSummaryBox.innerHTML += `
        <hr class="summary-divider">
        <p class="summary-subtotal bold-text">Subtotal: $${subtotal.toFixed(2)}</p>
        <p class="summary-shipping bold-text">Shipping: Free</p>
        <p class="summary-tax bold-text">Tax: $${tax.toFixed(2)}</p>
        <p class="summary-total bold-text">Total: $${total.toFixed(2)}</p>
    `;
});
