<?php


namespace API\CONTROLLERS;

use API\MODELS\Taskprocess;
use API\SYSTEM\Controller;
use API\SYSTEM\Helper;
use Error;

class taskprocesscontroller extends Controller{
    private $process = null;
    public function getTaskFiles(){
        $task_id = $_POST['task_id'];
        if(isset($task_id)){
            $this->process = Taskprocess::where("task_id","=",$task_id);
            if(isset($this->process)){
                echo json_encode($this->process);
                return;
            }
        }
        return Helper::Error("Error! Something werrong.");
    }

    public function newProcess(){
        $comment = $_POST['comment'];
        $task_id = $_POST['task_id'];
        if(isset($comment) && isset($task_id)){
            $this->process = new Taskprocess;
            $this->process->id = 0;
            $this->process->comment = $comment;
            $this->process->task_id = $task_id;
            $this->process->create();
            echo json_encode(["Result"=>"Success"]);
            return true;
        }
        return Helper::Error("Error! Something wrrong.");
        
    }

    public function get(){
        $task_id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        if(isset($task_id)){
            $this->process = Taskprocess::where("task_id","=",$task_id);
            if(isset($this->process)){
                echo json_encode($this->process);
                return true;
            }
        }
        return Helper::Error("Error! Something wrrong.");
    }
}