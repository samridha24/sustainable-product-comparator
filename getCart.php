<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "Not logged in", "items" => [], "cart_count" => 0]);
    exit;
}

$user_id = $_SESSION['user_id'];

$stmt = $conn->prepare("
    SELECT 
  c.id AS cart_id,
  p.id AS product_id,
  p.name,
  p.price,
  p.carbonFootprint,  -- 🔥 ADD THIS LINE
  c.quantity
FROM cart c
JOIN products p ON c.product_id = p.id 
    WHERE c.user_id = ?
");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$items = [];
$total = 0;
$count = 0;
while ($row = $result->fetch_assoc()) {
    $items[] = $row;
    $total += $row['price'] * $row['quantity'];
    $count += $row['quantity'];
}

echo json_encode(["success" => true, "items" => $items, "total" => $total, "cart_count" => $count]);
?>
