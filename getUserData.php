<?php
session_start();
header('Content-Type: application/json');

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

// Prepare and bind
$stmt = $conn->prepare("SELECT name, email FROM users WHERE id = ?");
$stmt->bind_param("i", $userId);

// Execute and fetch result
$stmt->execute();
$result = $stmt->get_result();
if ($user = $result->fetch_assoc()) {
    echo json_encode($user);
} else {
    echo json_encode(['error' => 'User not found']);
}

$stmt->close();
$conn->close();
?>
