<?php
namespace API\MODELS;
use API\SYSTEM\Model;


class Files extends Model {
    public $id;
    public $path;
    public $task_id;
    public static $tableName = "files";
    public static $primaryKey = "id";
    public static $tableSchema = [
        "id"        =>  "DATA_TYPE_INT",
        "path"      =>  "DATA_TYPE_STR",
        "task_id"   =>  "DATA_TYPE_INT",
    ];



}