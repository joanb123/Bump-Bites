document.addEventListener("DOMContentLoaded", function() {
    // Function to handle saving gift message
    document.getElementById("saveMessage").addEventListener("click", function() {
        var giftMessage = document.getElementById("giftMessage").value;
        // Simulate saving the message to the database
        alert("Gift message saved: " + giftMessage);
    });
    // Function to handle checkout button click
    document.getElementById("checkoutBtn").addEventListener("click", function() {
        // Simulate initiating the checkout process
        alert("Checkout process initiated. Redirecting to checkout page...");
        // Here you can implement the logic to redirect the user to the checkout page
        // window.location.href = "checkout.html"; // Example of redirecting to a checkout page
    });
});