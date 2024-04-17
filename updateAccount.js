document.addEventListener("DOMContentLoaded", function() {
    // Fetch user information when the page is loaded
    fetchUserInfo();

    // Add event listener to the form for submitting updated user information
    document.querySelector(".personal-infoFormOne").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Collect form data
        const formData = new FormData(this);

        // Send updated user information to the server
        updateUserInfo(formData);
    });
});

// Function to fetch user information from the server
function fetchUserInfo() {
    // Make an AJAX request to fetch user information from the server
    fetch("fetch_user_info.php")
        .then(response => response.json())
        .then(data => {
            // Populate form fields with fetched user information
            document.getElementById("fname").value = data.firstName;
            document.getElementById("lname").value = data.lastName;
            document.getElementById("emailInfo").value = data.email;
        })
        .catch(error => console.error("Error fetching user information:", error));
}

// Function to send updated user information to the server
function updateUserInfo(formData) {
    // Make an AJAX request to update user information on the server
    fetch("updateAccount.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(message => {
        // Display a success message
        alert(message);
        
        // Optionally, you can fetch updated user information again to refresh the form fields
        fetchUserInfo();
    })
    .catch(error => console.error("Error updating user information:", error));
}
