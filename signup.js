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
});
