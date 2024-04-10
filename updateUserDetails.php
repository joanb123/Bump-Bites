<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$userId = $_SESSION['user_id'];

// Database configuration
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming POST request method
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['emailInfo'];
$password = $_POST['changePass']; // Consider hashing the password

// Update user details using prepared statement
$stmt = $conn->prepare("UPDATE users SET name=?, email=?, password=? WHERE id=?");
$stmt->bind_param("sssi", $fname, $email, $password, $userId);

if ($stmt->execute()) {
    echo json_encode(['success' => 'User details updated successfully']);
} else {
    echo json_encode(['error' => 'Failed to update user details']);
}

$stmt->close();
$conn->close();
?>
