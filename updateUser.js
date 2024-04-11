document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.personal-infoFormOne');
    form.onsubmit = function(e) {
      e.preventDefault();
  
      // Fetch form data
      const formData = new FormData(form);
  
      // AJAX request to the PHP script
      fetch('updateUserDetails.php', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if(data.success) {
          alert('User details updated successfully');
          // Redirect or update the UI as needed
          window.location.href = 'myAccount1.html';
        } else {
          alert('Failed to update user details');
        }
      })
      .catch(error => console.error('Error:', error));
    };
  });
  