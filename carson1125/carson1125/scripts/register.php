<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $username = $_POST["username"];
    $name = $_POST["name"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    
    $salt = uniqid(mt_rand(), true);
    $hashed_password = password_hash($password . $salt, PASSWORD_DEFAULT);

    $token = generateRandomToken();
    setcookie(TOKEN_KEY, $token, time() + (86400 * 30), "/");

    echo "Registration successful for username: " . $username;
}

function generateRandomToken() {
    return bin2hex(random_bytes(16));
}
?>