<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['cart_id']) || !isset($data['action'])) {
    echo json_encode(["success" => false, "message" => "Missing parameters"]);
    exit;
}

$user_id = $_SESSION['user_id'];
$cart_id = $data['cart_id'];
$action = $data['action'];

$stmt = $conn->prepare("SELECT quantity FROM cart WHERE id = ? AND user_id = ?");
$stmt->bind_param("ii", $cart_id, $user_id);
$stmt->execute();
$res = $stmt->get_result();

if ($row = $res->fetch_assoc()) {
    $qty = $row['quantity'];
    if ($action === 'increase') {
        $qty++;
    } else if ($action === 'decrease') {
        $qty--;
    }
    
    if ($qty <= 0) {
        $del = $conn->prepare("DELETE FROM cart WHERE id = ?");
        $del->bind_param("i", $cart_id);
        $del->execute();
    } else {
        $upd = $conn->prepare("UPDATE cart SET quantity = ? WHERE id = ?");
        $upd->bind_param("ii", $qty, $cart_id);
        $upd->execute();
    }
    
    $count_stmt = $conn->prepare("SELECT SUM(quantity) as val FROM cart WHERE user_id = ?");
    $count_stmt->bind_param("i", $user_id);
    $count_stmt->execute();
    $c = $count_stmt->get_result()->fetch_assoc();
    
    echo json_encode(["success" => true, "cart_count" => $c['val'] ? $c['val'] : 0]);
} else {
    echo json_encode(["success" => false, "message" => "Item not found"]);
}
?>
