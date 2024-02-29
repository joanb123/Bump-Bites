document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signIn2').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Get form input values
        let email = document.getElementById('email').value;
        let password = document.getElementById('pwd').value;
        // Validate form input (example: checking if email and password are not empty)
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return; // Exit function if validation fails
        }

        // Create a new FormData object
        var formData = new FormData();
        formData.append('email', email);
        formData.append('pwd', password); // Make sure to use 'pwd' as in your PHP script $_POST['pwd']

        // Send form data to PHP script using AJAX, without setting Content-Type header explicitly
        fetch('signin.php', {
            method: 'POST',
            body: formData // Content-Type is automatically set to 'multipart/form-data' by the FormData object
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send form data to server.');
            }
            if (response.headers.get("content-type").includes("application/json")) {
                return response.json(); // Only parse as JSON if the response is JSON
            }
            throw new Error('Response not JSON.');
        })
        .then(data => {
            // Redirect user to new page after successful sign-in
            window.location.href = 'myAccount.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
