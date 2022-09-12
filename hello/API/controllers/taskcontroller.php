<?php
namespace API\CONTROLLERS;
use API\SYSTEM\Controller;
use API\MODELS\Task;
use API\SYSTEM\Helper;
use API\MODELS\Log;
use API\MODELS\Taskprocess;
use API\MODELS\Files;
use API\MODELS\Feedback;

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
        if (isset($_POST['user_id'])){
            $id = $_POST['user_id'];
            $res = Task::where("user_id","=",$id,"and","isAccepted","=","1" ," and isDone=0");
            echo json_encode($res);
            return true;
        }
        return Helper::Error("Error! Something wrrong.");
    }
   
    public function deleteTask(){
        if (isset($_POST['id'])){
            $id = $_POST['id'];
            $res = Task::find($id);
            $childs = Log::where("task_id","=",$res->id);
            foreach($childs as $child){
                $child->delete();
            }
            $childs = Files::where("task_id","=",$res->id);
            foreach($childs a]s $child){
                \unlink($child->path);
                $child->delete();
            }
            $childs = Feedback::where("task_id","=",$res->id);
            foreach($childs as $child){
                $child->delete();
            }
            $childs = Taskprocess::where("task_id","=",$res->id);
            foreach($childs as $child){
                $child->delete();
            }
            $res->delete();
            echo json_encode(["Result"=>"Success"]);
            return true;
        }
        return Helper::Error("Error! Something wrrong.");
    }
    
    public function getAccepted(){
        if(isset($_POST['user_id'])){
            $this->task = Task::where("user_id","=",$_POST['user_id'],"isAccepted","=","1");
            if(isset($this->task)){
                echo json_encode($this->task);
                return;
            }
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
        if(isset($_POST['user_id'])){
            $id = $_POST['user_id'];

            $this->task = Task::where("user_id","=",$id," and ","isDone","=","1");
            echo json_encode($this->task);
            return;
        }
        return Helper::Error("Error!");
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
        //if( isset($_POST['author']) &&
        //    isset($_FILES['files']) &&
        //    isset($_POST['user_id']) &&
        //    isset($_POST['priority']) &&
        //    isset($_POST['subject']) 
        //){
        //    $task = new Task();
        //    $task->id                  = 1000;
        //    $task->author              = Helper::_str($_POST['author']);
        //    $task->user_id             = filter_var($_POST['user_id'],FILTER_SANITIZE_NUMBER_INT);
        //    $task->priority            = filter_var($_POST['priority'],FILTER_SANITIZE_NUMBER_INT);
        //    $task->subject             = Helper::_str($_POST['subject']);
        //    $task->isAccoumpanyingText = boolval($_POST['isAccoumpanyingText']);  
        //    $task->periodOfExecution   = Helper::now();//isset($_POST['periodOfExecution'])?$_POST['periodOfExecution']:null;
        //    $task->isAccepted          = false;
        //    $task->isDone              = false;
        //    $task->setIsSeenAfterDone  = false;
        //    $task->created_at          = Helper::now();
        //    $task->create();
        //    //if($this->task->create()){
        //    //    $last = Task::last();
        //    //    $files = new filecontroller;
        //    //    $files->addNewOne("files",$last->id);
        //    //    echo json_encode(["Result"=>"Success !"]);
        //    echo "<br/>\n";
        //    echo json_encode(["Result"=>$task]);
        //    //    return true;
        //    //}
        //    return;
        //}
        //return Helper::Error("Error! Some thing wrrong!");


        $t = new Task();
        $t->id = 0;
        $t->author              = "adsfdsaf";
        $t->user_id             = 12;
        $t->priority            = 12;
        $t->subject             = "asdfsadfsadf";
        $t->isAccoumpanyingText = 0;  
        $t->periodOfExecution   = "";//isset($_POST['periodOfExecution'])?$_POST['periodOfExecution']:null;
        $t->isAccepted          = 0;
        $t->isDone              = 0;
        $t->setIsSeenAfterDone  = 0;
        $t->created_at          = "";
        $res = $t->create();
            pre( $t);
            pre( $res);
        
    }

}