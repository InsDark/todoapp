<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $taskTitle = filter_var($_POST['title'], FILTER_DEFAULT);
    if($taskTitle) {
        require './../src/php/db.php';
        session_start();
        $userId = $_SESSION['user'];
        $db = connectDB();
        $task_time = date('Y-m-d');
        $query = "INSERT INTO tasks(task_title, task_time, task_maker) VALUES   ('$taskTitle', '$task_time', $userId)";
        $res = $db->query($query);
        if($res){
            echo json_encode([1]);
        } else{
            echo json_encode([0]);
        }
    }
}