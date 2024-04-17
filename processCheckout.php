<?php

// Start session
session_start();

// Replace these variables with your actual database details
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

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO placeOrderPage (email, first_name, last_name, address, apt_ste, city, state, zipcode, card_number, exp_month, exp_year, security_code, name_on_card) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssssssssss", $email, $first_name, $last_name, $address, $apt_ste, $city, $state, $zipcode, $card_number, $exp_month, $exp_year, $security_code, $name_on_card);

// Set parameters and execute
$email = $_POST['email']; // Example of capturing POST data; ensure you have a corresponding 'name' attribute in your HTML input
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$address = $_POST['address'];
$apt_ste = $_POST['apt_ste'];
$city = $_POST['city'];
$state = $_POST['state'];
$zipcode = $_POST['zipcode'];
$card_number = $_POST['card_number'];
$exp_month = $_POST['exp_month'];
$exp_year = $_POST['exp_year'];
$security_code = $_POST['security_code'];
$name_on_card = $_POST['name_on_card'];

// TODO: Add your validation and sanitation here

// Assuming connection to database is established above this section
// Prepare and bind
$stmt = $conn->prepare("INSERT INTO placeOrderPage (email, first_name, last_name, address, apt_ste, city, state, zipcode, card_number, exp_month, exp_year, security_code, name_on_card) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssssssssss", $email, $first_name, $last_name, $address, $apt_ste, $city, $state, $zipcode, $card_number, $exp_month, $exp_year, $security_code, $name_on_card);

// Sanitize and Validate Email
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

// Use trim and stripslashes for basic sanitization of strings
$first_name = trim(stripslashes($_POST['first_name']));
$last_name = trim(stripslashes($_POST['last_name']));
$address = trim(stripslashes($_POST['address']));
$apt_ste = trim(stripslashes($_POST['apt_ste']));
$city = trim(stripslashes($_POST['city']));
$state = trim(stripslashes($_POST['state']));

// Validate and Sanitize ZIP Code
$zipcode = filter_var($_POST['zipcode'], FILTER_SANITIZE_NUMBER_INT);
if (!preg_match("/^[0-9]{5}$/", $zipcode)) {
    die("Invalid ZIP Code format");
}

// Sanitize card number by removing any non-digit characters and then check length
$card_number = preg_replace('/\D/', '', $_POST['card_number']);
if (strlen($card_number) < 13 || strlen($card_number) > 19) {
    die("Invalid card number format");
}

$exp_month = trim(stripslashes($_POST['exp_month']));
$exp_year = trim(stripslashes($_POST['exp_year']));
$security_code = trim(stripslashes($_POST['security_code']));
$name_on_card = trim(stripslashes($_POST['name_on_card']));

// SQL query to insert the user data into the database using prepared statements




header("Location: confirmation.html"); // Redirect
if ($stmt->execute() === TRUE) {
    // Redirect user to another page upon successful signup
    header("Location: confirmation.html");
    exit; // Make sure no other code is executed after redirection
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();

?>
