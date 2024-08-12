<?php
session_start();

define("TOKEN_KEY", "token");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $stored_username = $_COOKIE["username"];
    $stored_name = $_COOKIE["name"];
    $stored_hashed_password = $_COOKIE["hashed_password"];
    $stored_salt = $_COOKIE["salt"];

    $stored_token = $_COOKIE[TOKEN_KEY];

    if ($username === $stored_username && password_verify($password . $stored_salt, $stored_hashed_password) && validateToken($stored_token)) {
        $_SESSION["username"] = $username;
        echo "Login successful for username: " . $username;
    } else {
        echo "Invalid username, password, or token";
    }
}

function validateToken($token) {
    if (isset($token) && !empty($token)) {
        $validity_period = 86400;
        $stored_time = isset($_COOKIE["token_time"]) ? $_COOKIE["token_time"] : 0;
        $current_time = time();

        if ($current_time - $stored_time <= $validity_period) {
            return true; 
        } else {
            return false;
        }
    } else {
        return false;
    }
}
?>