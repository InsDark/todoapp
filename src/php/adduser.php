<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    require './db.php';
    $db = connectDB();

    $userName =  filter_var( $_POST['userName'], FILTER_DEFAULT );
    $userEmail = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL );
    $userPass = $_POST['password']; 
    $res = $db->query("SELECT * FROM users WHERE user_email ='$userEmail'")->fetch();
    if($res){
        header('Location: ./../../index.php?msg=1');
    } else{
        $userPassHash = password_hash($userPass, PASSWORD_BCRYPT);
        if(isset($userName) && isset($userEmail) && isset($userPassHash)){
            $query = "INSERT INTO users (user_name, user_email, user_pass) VALUES('$userName', '$userEmail', '$userPassHash')";
            $db->query($query);
            session_start();
            $_SESSION['login'] = true;
            $_SESSION['user'] = $userName;
            $_SESSION['email'] = $userEmail;
            header("Location: ./../pages/dashboard.php");
        }
    }
}