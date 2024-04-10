<?php
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create connection to MariaDB
$conn = new mysqli($servername, $contactName, $confirmEmail, $contactMessage);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Escape user inputs for security
$contactName = $conn->real_escape_string($_POST['contactName']);
$contactEmail = $conn->real_escape_string($_POST['contactEmail']);
$contactMessage = $conn->real_escape_string($_POST['contactMessage']);


// Validate email and password
if (empty($contactName) || empty($contactEmail) || empty($contactMessage)) 

// SQL query to insert the user data into the database using prepared statements
$sql = $conn->prepare("INSERT INTO signUpPage (contactName, contactEmail, contactMessage) VALUES (?, ?, ?)");
$sql->bind_param("sss", $contactName, $contactEmail, $contactMessage);


if ($sql->execute() === TRUE) {
    // Redirect user to another page upon successful signup
    header("Location: tellUsMore.html");
    exit; // Make sure no other code is executed after redirection
} else {
    echo "Error: " . $sql->error;
}

// Close the database connection
$conn->close();
?>
