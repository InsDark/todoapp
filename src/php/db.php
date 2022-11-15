<?php 

function connectDB () {
    $server = 'localhost';
    $user = 'root';
    $password = 'root';
    $database = 'todoappcalendar';
    
    $db = new PDO("mysql:host=$server;dbname=$database", $user, $password);

    if(!$db) {
        echo "Database connection was not established";
        exit;
    }
    return $db;
}