<?php
include_once('dbconfig.php');

$conn = Database::connect();
$sql = "SELECT * FROM plans";
$stmt = $conn->prepare($sql);
$stmt->execute();

$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
Database::disconnect();
echo json_encode($rows);
?>