<?php 
include './db.php';

$db = connectDB();

$userEmail = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$userPassword = $_POST['password'];

$query = "SELECT password from user where email = '$userEmail';";
$res = mysqli_query($db, $query);
var_dump($res);

    $passwordHashed = mysqli_fetch_assoc($res);
    if(!$passwordHashed['password']){
        header('location: ./../pages/login.php?msg=1');
    } else{
        $pas = password_verify($userPassword, $passwordHashed['password']);
    
        if($pas) {
            session_start();
            $_SESSION['login'] = true;
            header("location: ./../pages/dashboard.php");
        } else{
            header('location: ./../pages/login.php?msg=2');
        }
    }







