<?php
namespace API\CONTROLLERS;
use API\MODELS\Feedback;
use API\MODELS\Task;
use API\SYSTEM\Helper;
use API\SYSTEM\Controller;

class feedbackcontroller extends Controller{

    private $feedback= null;
    public function giveFeedback(){
        $rate = filter_var($_POST['rate'],FILTER_SANITIZE_NUMBER_INT);
        $comment = Helper::_str($_POST['comment']);
        $user_id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        $task_id = filter_var($_POST['user_id'],FILTER_SANITIZE_NUMBER_INT);
        if(
            isset($rate) &&
            isset($comment) &&
            isset($user_id) &&
            isset($task_id)  
        ){
            $this->feedback = new Feedback;
            $this->feedback->id = 0;
            $this->feedback->rate = $rate;
            $this->feedback->comment = $comment;
            $this->feedback->user_id = $user_id;
            $this->feedback->task_id = $task_id;
            $this->feedback->isSeen = false;
            $this->feedback->create();
            echo json_encode(["Result"=>"Success"]);
            return true;
        }
        echo json_encode(["Result"=>"Error! Something wrrong!"]);
        return false;
    }

    public function getFeedback(){
        $id = $_POST['user_id'];
        if(isset($id)){
            $res = Feedback::where("user_id","=",$id,"and","isSeen","=","0");
            foreach($res as $r){
                $r->task = Task::find($r->task_id);
            }
            echo json_encode($res);
        }else{
            echo json_encode(['Result'=>"Error! Something wroong!"]);
        }
    }
    public function updateFeedBackSeen(){
        $id = $_POST['id'];
        if(isset($id)){
            $this->feedback = Feedback::find($id);
            if($this->feedback){
                $this->feedback->isSeen = 1;
                $this->feedback->update();
                echo json_encode(["Result"=>"Success"]);
                return true;
            }
            echo json_encode(["Result"=>"Error! Something wrrong!"]);
            return false;
        }
        echo json_encode(["Result"=>"Error! Something wrrong!"]);
        return false; 
    }
}