<?php
// Database credentials
$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Attempt to connect to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO quiz_responses (question_one, question_two, question_three, question_four, question_five, question_six, question_seven, question_eight, question_nine, question_ten) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssssss", $questionOne, $questionTwo, $questionThree, $questionFour, $questionFive, $questionSix, $questionSeven, $questionEight, $questionNine, $questionTen);

// Retrieve form data and assign it to variables
$questionOne = $_POST['questionOne'] ?? 'not answered';
$questionTwo = $_POST['questionTwo'] ?? 'not answered';
$questionThree = $_POST['questionThree'] ?? 'not answered';
$questionFour = $_POST['questionFour'] ?? 'not answered';
$questionFive = $_POST['questionFive'] ?? 'not answered';
$questionSix = $_POST['questionSix'] ?? 'not answered';
$questionSeven = $_POST['questionSeven'] ?? 'not answered';
$questionEight = $_POST['questionEight'] ?? 'not answered';
$questionNine = $_POST['questionNine'] ?? 'not answered';
$questionTen = $_POST['questionTen'] ?? 'not answered';

if ($sql->execute() === TRUE) {
    // Redirect user to another page upon successful signup
    header("Location: questionsResult.html");
    exit; // Make sure no other code is executed after redirection
} else {
    echo "Error: " . $sql->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
