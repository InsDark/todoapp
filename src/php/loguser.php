<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $userEmail = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL);
    $userPass = filter_var( $_POST['password'], FILTER_DEFAULT);
    if( isset($userEmail) && isset($userPass)){ 
        require './db.php';
        $db = connectDB();
        $res = $db->query("SELECT user_id, user_pass FROM users WHERE user_email = '$userEmail'")->fetch();
        if($res){
            $dbUserPass = $res['user_pass'];
            $value = password_verify($userPass, $dbUserPass);
            if($value == true){
                session_start();
                $_SESSION['login'] = true;
                $_SESSION['user'] = $res['user_id'];
                $_SESSION['email'] = $userEmail;
                header('Location: ./../pages/dashboard.php');
            } else{
                header('Location: ./../pages/login.php?msg=3');
            }
           
        } else{
            header('Location: ./../pages/login.php?msg=2');
        }
    } else{
        header('Location: ./../pages/login.php?msg=1');
    }
    
}