<?php

// Start session
session_start();
    // Database credentials
    $servername = "127.0.0.1";
    $username = "m6ImAv1H9m";
    $password = "UdKJxGmug4";
    $dbname = "dbm6ImAv1H9m";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["contactName"];
    $email = $_POST["contactEmail"];
    $message = $_POST["contactMessage"];

    // Validate input
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Sanitize and Validate Email
$email = filter_var($_POST['contactEmail'], FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

$name = trim(stripslashes($_POST['contactName']));
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = trim(stripslashes($_POST['contactMessage']));

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contactUs (contactName, contactEmail, contactMessage) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);
    
    header("Location: emailConfirmation.html"); // Redirect
if ($stmt->execute() === TRUE) {
    // Redirect user to another page upon successful signup
    header("Location: emailConfirmation.html");
    exit; // Make sure no other code is executed after redirection
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();
}
?>
