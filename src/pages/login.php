<?php 
    include './../php/includes.php';
    includeTemplate('header');
?>
<body>
    <main class="form-container" >
        <div class="all-container">
            <form class="login">
                <h1>User Login</h1>
                <h2>Please fill your info</h2>
                <div class="login-form">
                    <div class="input">
                        <i class="fa-solid fa-user"></i>
                        <input placeholder="Enter your email address" type="email">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-lock"></i>
                        <input placeholder="Enter your password" type="password">
                    </div>
                    <button class="input" type="submit" >Login</button>
                    <a href="#">Forget password?</a>
                </div>
            </form>
            <div class="register">
                    <h2>Sing Up</h2>
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
                        <a href="#">Create an account</a>
                    </div>
            </div>
        </div>
    </main>
</body>
</html>