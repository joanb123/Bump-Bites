<?php
session_start();

// Check if session variables indicating user login exist
if (isset($_SESSION['user_id']) && isset($_SESSION['firstName']) && isset($_SESSION['email'])) {
    // User is logged in
    echo "true";
} else {
    // User is not logged in
    echo "false";
}
?>
