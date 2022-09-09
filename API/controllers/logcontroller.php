<?php


namespace API\CONTROLLERS;

use API\SYSTEM\Controller;
use API\SYSTEM\Helper;
use API\MODELS\Log;

class logcontroller extends Controller{

    private $log;
    public function add(){
        $comment = Helper::_str($_POST['comment']);
        $task_id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        if(isset($comment) && isset($task_id)){
            $this->log = new Log;
            $this->log->id = 0;
            $this->log->comment = $comment;
            $this->log->task_id = $task_id;
            if($this->log->create()){
                echo json_encode(["Resulte"=>"Success"]);
                return true;
            }
        }
        return Helper::Error("Error! Something Wrrong");
    }

    public function get(){
        $id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        if(isset($id)){
            $this->log = Log::where("task_id","=",$id);
            if(isset($this->log)){
                echo json_encode($this->log);
                return true;
            }
        }
        return Helper::Error("Error! Something Wrrong");
    }

    public function deletelogs(){
        $id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        if(isset($id)){
            $this->log = Log::where("task_id","=",$id);
            if(isset($this->log)){
                foreach($this->log as $log){
                    $log->delete();
                }
                echo json_encode(["Resulte"=>"Success"]);
                return true;
            }
        }
        return Helper::Error("Error! Something Wrrong");
    }
}