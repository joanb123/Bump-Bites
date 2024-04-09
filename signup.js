document.getElementById('signUpForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('pwd').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if emails match
    if (email !== confirmEmail) {
        alert("Emails do not match.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If everything's okay, continue with the form submission
    return true;
// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Example use: Greet the user with their first name from a cookie
// This could be triggered on a specific page load where you expect the cookie to be set
window.onload = function() {
    var userFirstName = getCookie('firstName');
    if (userFirstName) {
        alert("Welcome back, " + userFirstName + "!");
        // Or dynamically update the webpage to greet the user
    }
};

});
