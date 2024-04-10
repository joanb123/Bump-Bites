// updateUserInfo.js

// Function to update user information
function updateUserInfo(loggedInName, loggedInEmail) {
    // Retrieve the elements by their name attributes
    var nameElement = document.getElementsByName('name')[0];
    var emailElement = document.getElementsByName('email')[0];
  
    // Update the text content of the elements with the user's information
    nameElement.textContent = "Name: " + loggedInName;
    emailElement.textContent = "Email: " + loggedInEmail;
  }
  