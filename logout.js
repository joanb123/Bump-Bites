// Add an event listener to the sign-out link
    document.getElementById("sign-out-link").addEventListener("click", function(event) {
        // Prevent the default behavior of the link (i.e., navigating to index.html)
        event.preventDefault();
        
        // Redirect to logout.php
        window.location.href = "logout.php";
    });

