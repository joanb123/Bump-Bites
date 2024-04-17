<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Return an error response
    http_response_code(401); // Unauthorized
    exit();
}

// Retrieve user information
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
    // Return an error response
    http_response_code(500); // Internal Server Error
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to retrieve user information
$sql = "SELECT firstName, lastName, email FROM signUpPage WHERE id = ?";
$stmt = $conn->prepare($sql);

// Bind the parameter
$stmt->bind_param("i", $user_id);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    // Fetch user data
    $user = $result->fetch_assoc();

    // Return user data as JSON response
    header('Content-Type: application/json');
    echo json_encode($user);
} else {
    // Return an error response
    http_response_code(404); // Not Found
    die("User not found.");
}

// Close the database connection
$stmt->close();
$conn->close();
?>
