<?php
// Updated database connection parameters
$servername = "MariaDB"; // Typically, MariaDB uses 'localhost' but adjust if it's hosted elsewhere
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
// Hash the password before storing it
$password = password_hash($_POST['pwd'], PASSWORD_DEFAULT);

// SQL query to insert the user data into the database
$sql = "INSERT INTO users (firstName, lastName, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
