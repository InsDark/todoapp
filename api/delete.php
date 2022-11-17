<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST['task-id'])){
        $taskId = $_POST['task-id'];
        require './../src/php/db.php';
        $db = connectDB();
        $query = "DELETE from tasks where task_id = $taskId";
        $res = $db->query($query);
        if($res){
            echo json_encode([1]);
        } else{
            echo json_encode([0]);
        }
    }
}