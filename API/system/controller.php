<?php

namespace API\SYSTEM;

class Controller 
{
    protected $controller;
    protected $action;
    protected $params;
    protected $data;
    
    public function setController($controllerName){
        $this->controller  = $controllerName;
    }
    public function setAction($actionName){
        $this->action = $actionName;
    }
    public function setParams($paramsList){
        $this->params = $paramsList;
    }
    public function notfound(){
        $msg = array("Error"=>"Error Page Not Found...");
        echo json_encode($msg);
    }
    
}
