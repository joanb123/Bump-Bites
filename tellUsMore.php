<?php
// Start the session
session_start();

// Database connection details
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture and sanitize form data
    $expectedDue = $conn->real_escape_string($_POST['expectedDue']);
    $trimesterOne = $conn->real_escape_string($_POST['trimesterOne']);
    $trimesterTwo = $conn->real_escape_string($_POST['trimesterTwo']);
    $trimesterThree = $conn->real_escape_string($_POST['trimesterThree']);
    $dietary = $conn->real_escape_string($_POST['dietary']);

    // Prepare SQL statement to insert form data into the database
    $stmt = $conn->prepare("INSERT INTO tellUsMore (expectedDue, trimesterOne, trimesterTwo, trimesterThree, dietary) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $expectedDue, $trimesterOne, $trimesterTwo, $trimesterThree, $dietary);

    // Execute the prepared statement
    if ($stmt->execute() === TRUE) {
        // Set session message
        $_SESSION['success_message'] = "Your information has been submitted successfully.";

        // Redirect user to a confirmation page or display a success message
        header("Location: ourBox.html");
        exit; // Ensure no further code is executed after redirect
    } else {
        $_SESSION['error_message'] = "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
} else {
    // If the form is not submitted, redirect back to the form or display an error message
    $_SESSION['error_message'] = "Form is not submitted.";
}

// Close connection
$conn->close();

// Redirect to the form page
header("Location: tellUsMore.html");
exit;
?>
