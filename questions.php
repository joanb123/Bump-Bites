<?php
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

// Retrieve form data
$questionOne = $_POST['questionOne'];
$questionTwo = $_POST['questionTwo'];
$questionThree = $_POST['questionThree'];
$questionFour = $_POST['questionFour'];
$questionFive = $_POST['questionFive'];
$questionSix = $_POST['questionSix'];
$questionSeven = $_POST['questionSeven'];
$questionEight = $_POST['questionEight'];
$questionNine = $_POST['questionNine'];
$questionTen = $_POST['questionTen'];

// Simulate the JavaScript logic for determining the result
// This should ideally be adjusted according to how you plan to use the result
$resultCounts = ['sweet' => 0, 'salty' => 0, 'savory' => 0];
// Example of incrementing: $resultCounts['sweet']++;

// Based on the answers, increment the relevant counters
// You'll need to add your logic here based on how you want to process the answers

// Determine the result based on the counts
arsort($resultCounts); // Sorts the array in reverse order maintaining the keys
$result = key($resultCounts); // Gets the key of the first element in the array

// Insert into database
$stmt = $conn->prepare("INSERT INTO questionnaire_responses (question_one, question_two, question_three, question_four, question_five, question_six, question_seven, question_eight, question_nine, question_ten, result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssss", $questionOne, $questionTwo, $questionThree, $questionFour, $questionFive, $questionSix, $questionSeven, $questionEight, $questionNine, $questionTen, $result);

if ($stmt->execute()) {
  echo "Thank you for completing the questionnaire. Your preferences have been saved.";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
