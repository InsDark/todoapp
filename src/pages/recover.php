<?php 
    include './../php/includes.php';
    includeTemplate('header');
    $error;
    if(isset($_GET['msg'])) {
        $value = $_GET['msg'];
        if ($value == '1') {
            $error = 'The email not exist';
        } else if($value == '2') {
            $error = 'The password doesnt changed, try again';
        } else{
            $error = 'There are not enough arguments';
        }
    }
?>
<body>
    <main class="form-container" >
        <div class="all-container">
            <form class="login" action='./../php/changepass.php' method="POST">
                <h1>User Recover</h1>
                <h2>Please fill your info</h2>
                <h4><?php if(!empty($error)) { echo $error; } ?></h4>
                <div class="login-form">
                    <div class="input">
                        <i class="fa-solid fa-user"></i>
                        <input placeholder="Enter your email address" type="email" name='email'>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-lock"></i>
                        <input placeholder="Enter your  new password" name='password' type="password">
                    </div>
                    <button class="input" type="submit" >Recover Account</button>
                </div>
            </form>
            <div class="register">
                    <h2>Log In Up</h2>
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
                        <a href="./login.php">login in your account</a>
                    </div>
            </div>
        </div>
    </main>
</body>
</html>