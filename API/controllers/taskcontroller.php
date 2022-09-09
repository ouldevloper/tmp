<?php
namespace API\CONTROLLERS;
use API\SYSTEM\Controller;
use API\MODELS\Task;
use API\SYSTEM\Helper;

use Error;

class taskcontroller extends Controller{
    private $task = null;

    public function all(){
        $this->task = new Task;
        $res = $this->task->all();
        if(isset($res)){
            echo json_encode($res);
            return ;
        }
        return Helper::Error("Error! Something wrrong.");
    }
    
    public function fetchByUserId(){
        $id = $_POST['user_id'];
        if (isset($id)){
            $res = Task::where("user_id","=",$id);
            echo json_encode($res);
        }
    }
  
    public function getAccepted(){
        $this->task = Task::where("isAccepted","=","1");
        if(isset($this->task)){
            echo json_encode($this->task);
            return;
        }
        echo json_encode(["Result"=>"Error! Someething wrrong."]);
    }

    public function getWittingTask(){
        $this->task = Task::where("isAccepted","=","0");
        if(isset($this->task)){
            echo json_encode($this->task);
            return;
        }
        echo json_encode(["Resulte"=>"Error! Something wrrong."]);
    }

    public function getUserTasksArchieve(){
        $id = $_POST['user_id'];
        if(isset($id)){
            $this->task = Task::where("user_id","=",$id," and ","isDone","=","1");
            echo json_encode($this->task);
            return;
        }
    }

    public function setDone(){
        $task_id = $_POST['task_id'];
        if(isset($task_id)){
            $this->task = Task::find($task_id);
            if(isset($this->task)){
                $this->task->isDone = true;
                $this->task->update();
                echo json_encode(["Resulte"=>"Sucess"]);
                return true;
            }
        }
        return Helper::Error("Error! Something wrrong!");

    }

    public function setIsSeenAfterDone(){
        $task_id = $_POST['task_id'];
        if(isset($task_id)){
            $this->task = Task::find($task_id);
            if(isset($this->task)){
                $this->task->isSeenAfterDone = true;
                $this->task->update();
                echo json_encode(["Resulte"=>"Sucess"]);
                return true;
            }
        }
        return Helper::Error("Error! Something wrrong!");
    }

    public function updateIsAccepted(){
        $task_id = $_POST['task_id'];
        if(isset($task_id)){
            $this->task = Task::find($task_id);
            if(isset($this->task)){
                $this->task->isAccepted = true;
                $this->task->update();
                echo json_encode(["Resulte"=>"Sucess"]);
                return true;
            }
        }
        return Helper::Error("Error! Something wrrong!");
    }


    public function insert(){
        if(
            isset($_FILES['files']) &&
            isset($_POST['user_id']) &&
            isset($_POST['priority']) &&
            isset($_POST['subject']) &&
            isset($_POST['isAccoumpanyingText']) &&
            isset($_POST['periodOfExecution']) 
        ){
            $this->task = new Task();
            $this->task->id                  = 0;
            $this->task->user_id             = filter_var($_POST['user_id'],FILTER_SANITIZE_NUMBER_INT);
            $this->task->priority            = filter_var($_POST['priority'],FILTER_SANITIZE_NUMBER_INT);
            $this->task->subject             = Helper::_str($_POST['subject']);
            $this->task->isAccoumpanyingText = boolval($_POST['isAccoumpanyingText']);  
            $this->task->periodOfExecution   = isset($_POST['periodOfExecution'])?$_POST['periodOfExecution']:null;
            $this->task->isAccepted          = isset($_POST['isAccepted'])?boolval($_POST['isAccepted']):null;
           if($this->task->create()){
                $last = Task::last();
                $files = new filecontroller;
                $files->addNewOne("files",$last->id);
                echo json_encode(["Result"=>"Success !"]);
                return true;
            }
        }else{
            return Helper::Error("Error! Some thing wrrong!");
        }
    }

}