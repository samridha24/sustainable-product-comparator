<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['cart_id'])) {
    echo json_encode(["success" => false, "message" => "Missing parameters"]);
    exit;
}

$user_id = $_SESSION['user_id'];
$cart_id = $data['cart_id'];

$del = $conn->prepare("DELETE FROM cart WHERE id = ? AND user_id = ?");
$del->bind_param("ii", $cart_id, $user_id);
if ($del->execute()) {
    $count_stmt = $conn->prepare("SELECT SUM(quantity) as val FROM cart WHERE user_id = ?");
    $count_stmt->bind_param("i", $user_id);
    $count_stmt->execute();
    $c = $count_stmt->get_result()->fetch_assoc();
    echo json_encode(["success" => true, "cart_count" => $c['val'] ? $c['val'] : 0]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to remove"]);
}
?>
