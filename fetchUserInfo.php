<?php
// Connect to your database
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming you have stored user's information in a table named 'users'
$sql = "SELECT firstName, lastName, email FROM signUpPage WHERE firstName, lastName, email = ?"; // Replace 'user_id' with the actual column name for user identification
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId); // Assuming you have the user's ID stored in a variable named $userId
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $firstName = $row["firstName"];
    $lastName = $row["lastName"];
    $email = $row["email"];

    // Return the user's information as JSON
    echo json_encode(array("firstName" => $firstName, "lastName" => $lastName, "email" => $email));
} else {
    echo "User not found";
}

$stmt->close();
$conn->close();
?>
