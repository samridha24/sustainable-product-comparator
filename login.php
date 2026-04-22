<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(["success" => false, "message" => "Invalid inputs"]); 
    exit;
}

$email = $data['email'];
$password = $data['password'];

$stmt = $conn->prepare("SELECT id, username, password_hash FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    if (password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id'] = $user['id'];
        echo json_encode(["success" => true, "message" => "Logged in", "username" => $user['username']]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid credentials"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);
}
?>
