create database lichi_task;
use lichi_task;


CREATE TABLE task (
    id int PRIMARY KEY AUTO_INCREMENT,
    user_id int NOT NULL,
    priority int NOT NULL,
    subject varchar(55) NOT NULL,
    isAccoumpanyingText int DEFAULT  null,
    periodOfExecution date DEFAULT  null,
    isAccepted int DEFAULT  0,
    isSeenAfterAccepted int DEFAULT  0
);
CREATE TABLE log  (
    id int PRIMARY KEY AUTO_INCREMENT ,
    comment varchar(255) NOT NULL,
    task_id int NOT NULL,
    constraint fk_log_task FOREIGN KEY (task_id) REFERENCES task(id)
);
CREATE TABLE feedback(
    id int PRIMARY KEY AUTO_INCREMENT,
    rate float DEFAULT  0.0,
    comment varchar(255)  NOT NULL,
    task_id int NOT NULL,
    user_id int NOT NULL,
    isSeen boolean  not null DEFAULT false,
    CONSTRAINT fk_taskdoner_task FOREIGN KEY (task_id) REFERENCES task(id)
);
CREATE TABLE files (
    id int PRIMARY KEY AUTO_INCREMENT,
    path VARCHAR(255) NOT NULL,
    task_id int NOT NULL,
    constraint fk_files_task FOREIGN KEY (task_id) REFERENCES task(id)
);
CREATE TABLE task_process(
    id int PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(255) NOT NULL,
    task_id int NOT NULL,
    CONSTRAINT fk_taskproccess_task FOREIGN KEY task_id REFERENCES task(id)
);
