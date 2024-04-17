<?php
header('Content-Type: application/json');

// Start session
session_start();

$servername = "127.0.0.1";
$username = "m6ImAv1H9m";
$password = "UdKJxGmug4";
$dbname = "dbm6ImAv1H9m";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed']));
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Form validation for email
if (empty($email)) {
    die(json_encode(['success' => false, 'message' => 'Email is required']));
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die(json_encode(['success' => false, 'message' => 'Invalid email format']));
}

// Form validation for password
if (empty($password)) {
    die(json_encode(['success' => false, 'message' => 'Password is required']));
}
if (strlen($password) < 8) {
    die(json_encode(['success' => false, 'message' => 'Password must be at least 8 characters long']));
}

$sql = "SELECT id, firstName, email, password FROM signUpPage WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    // Authentication successful, store user information in session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['firstName'] = $user['firstName'];
    $_SESSION['email'] = $user['email'];
    
    // After setting other session variables
    $_SESSION['loggedin'] = true;

    // Set cookies for the user's session
    setcookie('user_id', $user['id'], 0, '/'); // Session cookie (expires when browser is closed)
    setcookie('email', $user['email'], 0, '/'); // Session cookie (expires when browser is closed)

    echo json_encode(['success' => true, 'message' => 'Login successful', 'user' => $user]);
} else {
    // Authentication failed
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}

$conn->close();
?>
