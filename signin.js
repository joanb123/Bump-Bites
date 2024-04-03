document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".signInForm form");
    form.onsubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);
        const response = await fetch('signin.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json(); // Assuming PHP returns JSON
        if (result.success) {
            window.location.href = 'myAccount.html'; // Redirect on success
        } else {
            alert("Login failed: " + result.message); // Show error message
        }
    };
});