<?php

use API\SYSTEM\Router;


Router::GET("/task/new", "task@insert");
Router::GET("/task/get", "task@fetchAll");
Router::GET("/task/getone/{id}","task@tachByOne");


Router::POST('/feedback/get'    , "feedback@getFeedback");
Router::POST('/feedback/update' , "feedback@updateFeedBackSeen");
Router::POST('/feedback/new'    , "feedback@giveFeedback");
