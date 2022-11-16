<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // $taskTitle = $_POST['task_title'];
    echo json_encode([$_POST]);
}