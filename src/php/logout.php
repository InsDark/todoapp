<?php 
session_start();
$_SESSION['login'] = false;
$_SESSION['user'] = '';
$_SESSION['email'] = '';
header('Location: ./../pages/login.php');