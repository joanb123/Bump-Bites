// updateUserInfo.js

// Function to fetch user information from the server and update HTML content
function updateUserInfo() {
    // Fetch user information from the server
    fetch('fetchUserInfo.php')
      .then(response => response.json())
      .then(data => {
        // Update the HTML content with the fetched user information
        document.getElementsByName('name')[0].textContent = "Name: " + data.firstName + " " + data.lastName;
        document.getElementsByName('email')[0].textContent = "Email: " + data.email;
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Call the function to update user information on page load
  updateUserInfo();
  