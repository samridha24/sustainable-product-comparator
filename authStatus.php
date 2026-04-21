<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (isset($_SESSION['user_id'])) {
    $stmt = $conn->prepare("SELECT username FROM users WHERE id = ?");
    $stmt->bind_param("i", $_SESSION['user_id']);
    $stmt->execute();
    $res = $stmt->get_result();
    if($user = $res->fetch_assoc()) {
        echo json_encode(["loggedIn" => true, "username" => $user['username']]);
    } else {
        echo json_encode(["loggedIn" => false]);
    }
} else {
    echo json_encode(["loggedIn" => false]);
}
?>
