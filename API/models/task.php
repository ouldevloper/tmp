<?php
namespace API\MODELS;

use API\SYSTEM\Model;

class Task extends Model{
    public $id;
    public $user_id;
    public $priority;
    public $subject;
    public $isAccoumpanyingText;
    public $periodOfExecution;
    public $isAccepted;
    public $isDone;
    public $isSeenAfterDone;

    public static $tableName ="task";
    public static $primaryKey = "id";
    public static $tableSchema = [
        "id"                    => "DATA_TYPE_INT",
        "user_id"               => "DATA_TYPE_INT",
        "priority"              => "DATA_TYPE_INT",
        "subject"               => "DATA_TYPE_STR",
        "isAccoumpanyingText"   => "DATA_TYPE_BOOL",
        "periodOfExecution"     => "DATA_TYPE_DATE",
        "isAccepted"            => "DATA_TYPE_BOOL",
        "isDone"                => "DATA_TYPE_BOOL",
        "isSeenAfterDone"       => "DATA_TYPE_BOOL"
    ];

}