<?php
namespace API\CONTROLLERS;
use API\SYSTEM\Controller;
use API\MODELS\Task;
use API\SYSTEM\Helper;

class taskcontroller extends Controller{
    private $task = null;
    public function index(){
        echo json_encode(["resulte"=>"Every thing work"]);
    }
    public function insert(){
        if(
            isset($_POST['id']) &&
            isset($_POST['user_id']) &&
            isset($_POST['priority']) &&
            isset($_POST['subject']) &&
            isset($_POST['isAccoumpanyingText']) &&
            isset($_POST['periodOfExecution']) &&
            isset($_POST['isAccepted'])
        ){
            //$extensions= array("jpeg","jpg","png");
            //$files_up = $_FILES['file']['name'];
            $this->task = new Task();
            $this->task->id = 0;
            $this->task->user_id = intval($_POST['user_id'],10);
            $this->task->priority = intval($_POST['priority'],10);
            $this->task->subject = Helper::_str($_POST['subject']);
            $this->task->isAccoumpanyingText = boolval($_POST['isAccoumpanyingText']);
            $this->task->periodOfExecution = $_POST['periodOfExecution']!=null?$_POST['periodOfExecution']:null;
            $this->task->isAccepted = $_POST['isAccepted']!=null?boolval($_POST['isAccepted']):null;
            $this->task->create();
            echo json_encode(["Result"=>"Success !"]);
        }else{
            echo json_encode(["Result"=>"Error! Some thing wrrong!"]);
        }

    }

    public function fetchByUserId(){
        $id = $_POST['user_id'];
        if (isset($id)){
            $res = 
        }
    }
    public function fetchAll(){
        $this->task = new Task;
        $res = $this->task->all();
        
        echo json_encode($res);
    }
}