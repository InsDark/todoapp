<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $userEmail = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL);
    $userPass = filter_var( $_POST['password'], FILTER_DEFAULT);
    if( isset($userEmail) && isset($userPass)){ 
        require './db.php';
        $db = connectDB();
        $res = $db->query("SELECT user_name, user_pass FROM users WHERE user_email = '$userEmail'")->fetch();
        if($res){
            $dbUserPass = $res['user_pass'];
            $value = password_verify($userPass, $dbUserPass);
            if($value == true){
                session_start();
                $_SESSION['login'] = true;
                $_SESSION['user'] = $res['user_name'];
                $_SESSION['email'] = $res['user_email'];
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