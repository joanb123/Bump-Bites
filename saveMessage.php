<?php
// Database connection parameters
$servername = "MariaDB";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted as a gift
if(isset($_POST['giftOption']) && !empty($_POST['giftMessage'])) {
    $giftMessage = $conn->real_escape_string($_POST['giftMessage']);
    // Assuming you have a column `gift_message` in a table related to user's account
    // And a way to identify the user, e.g., user_id
    $userId = 1; // Example user ID, replace with actual user identification logic

    $sql = "UPDATE users SET gift_message='$giftMessage' WHERE id='$userId'";

    if ($conn->query($sql) === TRUE) {
        echo "Gift message saved successfully.";
    } else {
        echo "Error saving message: " . $conn->error;
    }
} else {
    echo "Gift message is required.";
}

// Close connection
$conn->close();
?>
