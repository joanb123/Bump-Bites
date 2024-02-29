<?php

$servername = "MariaDB";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

 
// Check if form data was sent using POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data from POST request
    $email = $_POST['email'];
    $password = $_POST['pwd'];
    // Validate form data (example: check if email and password are not empty)
    if (empty($email) || empty($password)) {
        http_response_code(400); // Bad request
        echo json_encode(['error' => 'Email and password are required.']);
        exit; // Stop script execution
    }
    // Connect to MySQL database
    $mysqli = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($mysqli->connect_error) {
        http_response_code(500); // Internal server error
        echo json_encode(['error' => 'Failed to connect to database.']);
        exit; // Stop script execution
    }
    // Prepare SQL statement to insert data into database (example)
    $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    $statement = $mysqli->prepare($sql);
    // Bind parameters and execute statement
    $statement->bind_param('ss', $email, $password);
    $result = $statement->execute();
    if ($result) {
        // Data inserted successfully
        http_response_code(200); // OK
        echo json_encode(['success' => true]);
    } else {
        // Error inserting data
        http_response_code(500); // Internal server error
        echo json_encode(['error' => 'Failed to insert data into database.']);
    }
    // Close database connection
    $mysqli->close();
} else {
    // Handle invalid request method
    http_response_code(405); // Method not allowed
    echo json_encode(['error' => 'Method not allowed.']);
}
header('Content-Type: application/json');
echo json_encode(['success' => 'Your success message here']);
exit;


?>