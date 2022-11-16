<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $userEmail = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL);
    if($userEmail) {
        require './db.php';
        $db = connectDB();
        $res = $db->query("SELECT user_id FROM users WHERE user_email = '$userEmail'")->fetch();
        if($res) {
            $userNewPass = password_hash($_POST['password'], PASSWORD_BCRYPT);
            $res1 = $db->query("UPDATE users SET user_pass = '$userNewPass' WHERE user_email = '$userEmail'");
            if(isset($res1)) {
                header('Location: ./../pages/dashboard.php');
            } else{
                header('Location: ./../pages/recover?msg=2');
            }
        } else{
            header('Location: ./../pages/recover?msg=1');
        }
    } else{
        header('Location: ./../pages/recover.php');
    }
    
}