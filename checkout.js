// Toggle display for the email input field
document.getElementById('dropdownButton').addEventListener('click', function() {
    var emailInputField = document.getElementById('emailInputField');
    emailInputField.style.display = emailInputField.style.display === "none" ? "block" : "none";
});

// Toggle display for the delivery address input fields
document.getElementById('addressDropdownButton').addEventListener('click', function() {
    var addressInputFields = document.getElementById('addressInputFields');
    addressInputFields.style.display = addressInputFields.style.display === "none" ? "block" : "none";
});

// Toggle display for the payment method input fields
document.getElementById('paymentDropdownButton').addEventListener('click', function() {
    var paymentInputFields = document.getElementById('paymentInputFields');
    paymentInputFields.style.display = paymentInputFields.style.display === "none" ? "block" : "none";
});
