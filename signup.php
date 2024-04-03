<?php
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

// Escape user inputs for security
$firstName = $conn->real_escape_string($_POST['firstName']);
$lastName = $conn->real_escape_string($_POST['lastName']);
$email = $conn->real_escape_string($_POST['email']);
$confirmEmail = $conn->real_escape_string($_POST['confirmEmail']);
$password = $conn->real_escape_string($_POST['password']);
$confirmPassword = $conn->real_escape_string($_POST['confirmPassword']);

// Validate email and password
if (empty($email) || empty($confirmEmail) || empty($password) || empty($confirmPassword)) {
    die("Please fill in all fields.");
}
if ($email !== $confirmEmail) {
    die("Emails do not match.");
}
if ($password !== $confirmPassword) {
    die("Passwords do not match.");
}
if (strlen($password) < 8) {
    die("Password must be at least 8 characters long.");
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// SQL query to insert the user data into the database using prepared statements
$sql = $conn->prepare("INSERT INTO signUpPage (firstName, lastName, email, password) VALUES (?, ?, ?, ?)");
$sql->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

if ($sql->execute() === TRUE) {
    // Redirect user to another page upon successful signup
    header("Location: questions.html");
    exit; // Make sure no other code is executed after redirection
} else {
    echo "Error: " . $sql->error;
}

// Close the database connection
$conn->close();
?>
