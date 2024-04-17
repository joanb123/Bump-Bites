<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect the user to the login page or display an error message
    header("Location: signIn.html");
    exit();
}

// Retrieve user ID from the session
$user_id = $_SESSION['user_id'];

// Database connection details
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create connection to MariaDB
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['emailInfo'];
    $newPassword = $_POST['changePass'];

    // Update user information in the database
    $sql = "UPDATE signUpPage SET firstName=?, lastName=?, email=?, password=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $firstName, $lastName, $email, $newPassword, $user_id);
    
    if ($stmt->execute()) {
        // Display a success message using JavaScript
        echo "<script>alert('User information updated successfully!');</script>";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
