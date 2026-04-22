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

// helper function
function getRecyclabilityScore($text) {
    if (strpos($text, "100%") !== false) return 100;
    if (strpos($text, "Fully") !== false) return 90;
    if (strpos($text, "Recyclable") !== false) return 80;
    if (strpos($text, "Reusable") !== false) return 70;
    return 50;
}

while ($row = $result->fetch_assoc()) {

    // extract carbon value (e.g. "1.2 kg CO2" → 1.2)
    $carbon = floatval($row['carbonFootprint']);

    // convert recyclability text → number
    $recyclabilityScore = getRecyclabilityScore($row['recyclability']);

    // calculate eco score
    $ecoScore = 100 - ($carbon * 20) + ($recyclabilityScore / 20);

    // keep within 0-100
    $ecoScore = max(0, min(100, round($ecoScore)));

    // override DB value
    $row['ecoScore'] = $ecoScore;

    $products[] = $row;
}

echo json_encode($products);
?>
