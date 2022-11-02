<?php

include './db.php';
$db = connectDB();

$userEmail = $_POST['email'];
$userName = $_POST['userName'];

$userPlanePassword = $_POST['password'];
$userHashPassword = password_hash($userPlanePassword, PASSWORD_BCRYPT);

$query  = "INSERT INTO user(userName, email, password) VALUES('$userName', '$userEmail', '$userHashPassword');";

$res = mysqli_query($db, $query);
if($res) {
    header('location: ./../pages/dashboard.php');
}



