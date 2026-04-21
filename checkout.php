<?php
session_start();
header('Content-Type: application/json');
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
    exit;
}

$user_id = $_SESSION['user_id'];

$stmt = $conn->prepare("
    SELECT c.product_id, c.quantity, p.price 
    FROM cart c 
    JOIN products p ON c.product_id = p.id 
    WHERE c.user_id = ?
");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$items = [];
$total_amount = 0;
while ($row = $result->fetch_assoc()) {
    $items[] = $row;
    $total_amount += $row['price'] * $row['quantity'];
}

if (count($items) == 0) {
    echo json_encode(["success" => false, "message" => "Cart is empty"]);
    exit;
}

$conn->begin_transaction();

try {
    $o_stmt = $conn->prepare("INSERT INTO orders (user_id, total_amount) VALUES (?, ?)");
    $o_stmt->bind_param("id", $user_id, $total_amount);
    $o_stmt->execute();
    $order_id = $conn->insert_id;

    $oi_stmt = $conn->prepare("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)");
    foreach ($items as $item) {
        $oi_stmt->bind_param("iiid", $order_id, $item['product_id'], $item['quantity'], $item['price']);
        $oi_stmt->execute();
    }

    $del = $conn->prepare("DELETE FROM cart WHERE user_id = ?");
    $del->bind_param("i", $user_id);
    $del->execute();

    $conn->commit();
    echo json_encode(["success" => true, "message" => "Order placed successfully!"]);
} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(["success" => false, "message" => "Order failed: " . $e->getMessage()]);
}
?>
