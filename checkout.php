<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "Please login to add to cart"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['product_id'])) {
    echo json_encode(["success" => false, "message" => "Missing parameters"]);
    exit;
}

$user_id = $_SESSION['user_id'];
$product_id = $data['product_id'];

// Check if already in cart
$stmt = $conn->prepare("SELECT id, quantity FROM cart WHERE user_id = ? AND product_id = ?");
$stmt->bind_param("ii", $user_id, $product_id);
$stmt->execute();
$res = $stmt->get_result();

if ($row = $res->fetch_assoc()) {
    $new_qty = $row['quantity'] + 1;
    $upd = $conn->prepare("UPDATE cart SET quantity = ? WHERE id = ?");
    $upd->bind_param("ii", $new_qty, $row['id']);
    $upd->execute();
} else {
    $ins = $conn->prepare("INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)");
    $ins->bind_param("ii", $user_id, $product_id);
    $ins->execute();
}

$count_stmt = $conn->prepare("SELECT SUM(quantity) as val FROM cart WHERE user_id = ?");
$count_stmt->bind_param("i", $user_id);
$count_stmt->execute();
$c = $count_stmt->get_result()->fetch_assoc();

echo json_encode(["success" => true, "message" => "Added to cart", "cart_count" => $c['val']]);
?>
