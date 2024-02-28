<?php
// Database connection parameters
$host = "https://students.gaim.ucf.edu/~as869627/";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve email and password values from the form
    $email = $_POST["email"];
    $password = $_POST["pwd"];
    // Perform basic validation
    if (empty($email) || empty($password)) {
        $error_message = "Please fill in all fields.";
    } else {
        // Placeholder for authentication (always succeeds in this example)
        // You can replace this with your actual authentication logic
        $authenticated = true;
        if ($authenticated) {
            // Redirect to myAccount.html upon successful authentication
            header("Location: myAccount.html");
            exit(); // Stop further execution
        } else {
            // Authentication failed
            $error_message = "Invalid email or password. Please try again.";
        }
    }
}