<?php
namespace API\MODELS;
use API\SYSTEM\Model;
class Feedback extends Model{
    public $id;
    public $rate;
    public $comment;
    public $task_id;
    public $user_id;
    public $isSeen;

    public static $tableName = "feedback";
    public static $primaryKey = "id";
    public static $tableSchema = [
        "id"        => "DATA_TYPE_INT",
        "rate"      => "DATA_TYPE_FLOAT",
        "comment"   => "DATA_TYPE_STR",
        "task_id"   => "DATA_TYPE_INT",
        "user_id"   => "DATA_TYPE_INT",
        "isSeen"    => "DATA_TYPE_BOOL",
    ];


}