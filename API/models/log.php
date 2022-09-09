<?php
namespace API\MODELS;
use API\SYSTEM\Model;


class Log extends Model{
    public $id;
    public $comment;
    public $task_id;
    public static $tableName = "log";
    public static $primaryKey = "id";
    public static $tableSchema = [
        "id"        =>  "DATA_TYPE_INT",
        "comment"   =>  "DATA_TYPE_STR",
        "task_id"   =>  "DATA_TYPE_INT",
    ];
}