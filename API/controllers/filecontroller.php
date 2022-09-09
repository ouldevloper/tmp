<?php

namespace API\CONTROLLERS;

use API\MODELS\Files;
use API\SYSTEM\Controller;
use API\SYSTEM\Helper;

class filecontroller extends Controller{
    private $file = null;
    public function get(){
        $task_id = filter_var($_POST['task_id'],FILTER_SANITIZE_NUMBER_INT);
        if(isset($task_id)){
            $this->file = Files::where("task_id","=",$task_id);
            if(isset($this->file)){
                echo json_encode($this->file);
                return true;
            }
        }
        return Helper::Error("Error! Something wrrong!");
    }

    public function addNewOne($key,$task_id){
       $count  = count($_FILES[$key]['name']);
       pre($_FILES);
       foreach(range(0,$count-1)  as $index){
            $name = $_FILES[$key]['name'][$index];
            $extention = $extension = pathinfo($_FILES[$key]['name'][$index], PATHINFO_EXTENSION);
            $updir = "/files/";
            $index = 0;
            if(file_exists($updir."/".$name)){
                $name = str_replace($extension,"",$name);
                do{
                    $name = $name."_".$index;
                    $index++;
                }while(file_exists($updir."/".$name.".".$extension));
                $name = $name.".".$extension;  
            }
            if(move_uploaded_file($_FILES[$key]["tmp_name"][$index],$updir."/".$name)){
                $this->file = new Files;
                $this->file->id = 0;
                $this->file->path = $updir."/".$name;
                $this->file->task_id = $task_id;
                $this->file->create();
            }
       }    
        
    }
    public function deleteFile(){
        if(isset($_POST['id'])){
            $id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);
            $this->file = Files::find($id);
            if(isset($this->file)){
                unlink($this->file->path);
                $this->file->delete();
                echo json_encode(["Result"=>"Success"]);
                return true;
            }
            return Helper::Error("Error! Something wrrong.");
        }
    }   
}