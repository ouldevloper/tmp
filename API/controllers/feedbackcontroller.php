<?php
namespace API\CONTROLLERS;
use API\MODELS\Feedback;
use API\MODELS\Task;
use API\SYSTEM\Helper;
use API\SYSTEM\Controller;

class feedbackcontroller extends Controller{

    private $feedback= null;
    public function giveFeedback(){
        if(
            isset($_POST['rate']) &&
            isset($_POST['comment']) &&
            isset($_POST['task_id']) &&
            isset($_POST['user_id'])  
        ){
            $this->feedback = new Feedback;
            $this->feedback->id = 0;
            $this->feedback->rate = floatval($_POST['rate']);
            $this->feedback->comment = Helper::_str($_POST['comment']);
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