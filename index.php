<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://kit.fontawesome.com/b8ffa0db99.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="./../img/favicon.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/css/style.css">
    <title>Todo App - Dashboard</title>
</head>

<?php 
if(isset($_GET['msg'])){ 
    $msg = $_GET["msg"];
    if($msg == "1"){
        $msg  ='The user already exist';
    }
}
?>
<body>
    <main class="form-container" >
        <div class="all-container">
            <form class="login" action='./src/php/adduser.php' method="POST">
                <h1>User Register</h1>
                <h2>Please fill your info</h2>
                <h5 style="color:red;"><?php if(isset($msg)){ echo $msg;}?></h5>
                <div class="login-form">
                    <div class="input">
                        <i class="fa-solid fa-user"></i>
                        <input placeholder="Type an userName" type="text" name='userName' required>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-envelope"></i>
                        <input placeholder="Type an email" type="email" name='email' required>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-lock"></i>
                        <input placeholder="Type a password" name="password" type="password" required>
                    </div>
                    <button class="input" type="submit" >Register</button>
                    <a href="#">Forget password?</a>
                </div>
            </form>
            <div class="register">
                    <h2>Login Into a current account</h2>
                    <div class="social-media">
                        <h3>Follow Us on social media</h3>
                        <div class="icons">
                            <a href="http://facebook.com/" class="fa-brands fa-facebook" target="_blank" ></a>
                            <a href="http://twitter.com" class="fa-brands fa-twitter" target="_blank" ></a>
                            <a href="http://instagram.com/" class="fa-brands fa-instagram" target="_blank" ></a>
                            <a href="http://discord.com/" class="fa-brands fa-discord" target="_blank" ></a>
                            <a href="http://reddit.com/" class="fa-brands fa-reddit" target="_blank" ></a>
                            <a href="http://youtube.com/" class="fa-brands fa-youtube" target="_blank" ></a>
                        </div>
                        <a href="./src/pages/login.php">Login into an account</a>
                    </div>
            </div>
        </div>
    </main>
</body>
</html>