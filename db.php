<?php
// $servername = "localhost";
// $username = "testuser";
// $password = "testuser";
// $dbname = "testdb";

$servername = "localhost";
$username = "testuser";
$password = "testuser";
$dbname = "testdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

