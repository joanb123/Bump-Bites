<?php
// Database configuration
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

// Get the selected box type from the POST request
$boxType = $_POST['boxType'] ?? '';

// Check if boxType is provided
if (!empty($boxType)) {
    // Prepare an INSERT statement
    $stmt = $conn->prepare("INSERT INTO UserSelections (boxType) VALUES (?)");
    $stmt->bind_param("s", $boxType);           
    
    // Execute the statement
    if ($stmt->execute()) {
        echo "Selection saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
} else {
    echo "No selection made.";
}

// Close connection
$conn->close();
?>
