<?php

use API\SYSTEM\Router;



Router::POST("/api/feedback/new"    ,"feedback@giveFeedback");
Router::POST("/api/feedback/get"    ,"feedback@get");
Router::POST("/api/feedback/update" ,"feedback@updateFeedBackSeen");


Router::POST("/api/log/new"    ,"log@add");
Router::POST("/api/log/get"    ,"log@get");
Router::POST("/api/log/delete" ,"log@deletelogs");


Router::POST("/api/process/new" ,"taskprocess@newProcess");
Router::POST("/api/process/get" ,"taskprocess@get");


Router::POST("/api/task/all"           ,"task@all");
Router::POST("/api/task/user"          ,"task@fetchByUserId");
Router::POST("/api/task/accepted"      ,"task@getAccepted");
Router::POST("/api/task/waitting"      ,"task@getWittingTask");
Router::POST("/api/task/userarchieve"  ,"task@getUserTasksArchieve");
Router::POST("/api/task/done"          ,"task@setDone");
Router::POST("/api/task/seen"          ,"task@setIsSeenAfterDone");
Router::POST("/api/task/accept"        ,"task@updateIsAccepted");
Router::POST("/api/task/new"           ,"task@insert");



Router::POST("/api/file/delete","file@delete");
//Router::POST("/api/task/setisseen"    ,"task@updateIsSeenAfterDone");
//Router::POST("/api/task/setdone"      ,"task@updateIsAccepted");
//Router::POST("/api/task/witting"      ,"task@insert");

