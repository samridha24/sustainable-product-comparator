<?php
header('Content-Type: application/json');
require_once '../config/db.php';

$stmt = $conn->prepare("SELECT * FROM products");

if (!$stmt) {
    die(json_encode(["sql_error" => $conn->error]));
}

$stmt->execute();
$result = $stmt->get_result();

$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>
