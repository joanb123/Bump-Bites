document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formContainer');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Assuming validation passes, submit the form data using AJAX
        const formData = new FormData(form);
        fetch('initialSignIn.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Redirect to myBox.html upon successful submission
                window.location.href = 'ourBox.html';
            } else {
                throw new Error('Form submission failed!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        });
    });
});
