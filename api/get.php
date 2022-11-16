<?php 
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    require './../src/php/db.php';
    session_start();
    if(isset($_GET['date']) && $_GET['date'] != '' && isset($_SESSION['user'])){
        $userId = $_SESSION['user'];
        $date = ($_GET['date']);
        $query = "SELECT task_title FROM tasks INNER JOIN users on tasks.task_maker = users.user_id WHERE task_time = '$date'" ;
        $db = connectDB();
        $res = $db->query($query)->fetchAll();
        if($res) {
            echo json_encode($res);
        } else{
            echo json_encode(null);
        }
        
    } else {
        echo json_encode(['You dont have the right permissions']);
    }
}