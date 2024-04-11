<?php
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
    $stmt = $conn->prepare("INSERT INTO YOUR_TABLE_NAME (expectedDue, trimesterOne, trimesterTwo, trimesterThree, dietary) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $expectedDue, $trimesterOne, $trimesterTwo, $trimesterThree, $dietary);

    // Execute the prepared statement
    if ($stmt->execute() === TRUE) {
        // Redirect user to a confirmation page or display a success message
        header("Location: confirmation.html");
        exit; // Ensure no further code is executed after redirect
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    // If the form is not submitted, redirect back to the form or display an error message
    echo "Form is not submitted.";
}
?>
