<?php

use API\SYSTEM\Router;
use API\MODELS\Task;


Router::POST("/api/feedback/new"    ,"feedback@giveFeedback");
Router::POST("/api/feedback/get"    ,"feedback@getFeedback");
Router::POST("/api/feedback/update" ,"feedback@updateFeedBackSeen");


Router::POST("/api/log/new"    ,"log@add");
Router::POST("/api/log/get"    ,"log@get");
Router::POST("/api/log/delete" ,"log@deletelogs");


Router::POST("/api/process/new" ,"taskprocess@newProcess");
Router::POST("/api/process/get" ,"taskprocess@get");


Router::POST("/api/task/all"            ,"task@all");
Router::POST("/api/task/user"          ,"task@fetchByUserId");
Router::POST("/api/task/accepted"      ,"task@getAccepted");
Router::POST("/api/task/waitting"      ,"task@getWittingTask");
Router::POST("/api/task/userarchieve"  ,"task@getUserTasksArchieve");
Router::POST("/api/task/delete"        ,"task@deleteTask");
Router::POST("/api/task/done"          ,"task@setDone");
Router::POST("/api/task/seen"          ,"task@setIsSeenAfterDone");
Router::POST("/api/task/accept"        ,"task@updateIsAccepted");
Router::POST("/api/task/new"           ,"task@insert");



Router::GET("/test",function(){
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


});


Router::POST("/api/file/delete","file@delete");
//Router::POST("/api/task/setisseen"    ,"task@updateIsSeenAfterDone");
//Router::POST("/api/task/setdone"      ,"task@updateIsAccepted");
//Router::POST("/api/task/witting"      ,"task@insert");

