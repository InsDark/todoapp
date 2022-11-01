<?php 

function connectDB () {
    $server = 'localhost';
    $user = 'root';
    $password = 'root';
    $dataBase = 'todoappcalendar';
    
    $db = mysqli_connect($server, $user, $password, $dataBase);

    if(!$db) {
        echo "Database connection was not established";
        exit;
    }
    return $db;
}