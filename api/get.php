<?php 
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    require './../src/php/db.php';
    session_start();
    if(isset($_GET['date']) && $_GET['date'] != '' && isset($_SESSION['user'])){
        $userName = $_SESSION['user'];
        $date = ($_GET['date']);
        $query = "SELECT title FROM tasks WHERE date = '$date' AND id = '$userName'" ;
        $db = connectDB();
        
        $res = $db->query($query)->fetchAll();
        if($res) {
            echo json_encode($res);
        } else{
            echo json_encode(null);
        }
        
    } else{
        die("It's missing arguments");
    }
}