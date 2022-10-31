<?php  include './../php/includes.php'; includeTemplate('header')?>
<body>
    <header>
        <img src="./../img/logo.png" alt="logo-img">
        <nav>
            <a class="fa-solid fa-user" href="#">Log Out</a>
        </nav>
    </header>
    <hr>
    <main>
        <section>
            <div class="date-container">
                <i class="fa-solid fa-angle-left"></i>
                <h2 class='date'></h2>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div class="calendar"></div>
        </section>
        <section>

        </section>
    </main>
    <script src="./../js/app.js" type='module'></script>
</body>