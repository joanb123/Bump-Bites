document.addEventListener("DOMContentLoaded", function() {
    // Send an AJAX request to check if the user is logged in
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "profileIcon.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var isLoggedIn = xhr.responseText.trim() === "true";

                // Select the placeholder element for the profile icon
                var profileIconPlaceholder = document.getElementById("profileIconPlaceholder");

                // Clear the placeholder first
                profileIconPlaceholder.innerHTML = '';

                // Create the profile icon link
                var profileIconLink = document.createElement("a");
                profileIconLink.innerHTML = '<i class="fa-solid fa-user"></i>';
                
                // Add event listener to check login status when the profile icon is clicked
                profileIconLink.addEventListener("click", function(event) {
                    event.preventDefault(); // Prevent the default action of the link
                    if (isLoggedIn) {
                        // If user is logged in, redirect to myAccount.html
                        window.location.href = "myAccount.html";
                    } else {
                        // If user is not logged in, redirect to signIn.html
                        window.location.href = "signIn.html";
                    }
                });
                
                // Append the profile icon link to the placeholder
                profileIconPlaceholder.appendChild(profileIconLink);
            } else {
                console.error("Error: Unable to check login status.");
            }
        }
    };
    xhr.send();
    
    // Add event listener for the shopping cart icon
    var shoppingCartIcon = document.getElementById("shoppingCartIcon");
    shoppingCartIcon.addEventListener("click", function() {
        window.location.href = "shoppingCart.html";
    });
});
