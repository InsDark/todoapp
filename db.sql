CREATE TABLE users (
    user_id int auto_increment not null,
    user_pass varchar(255) not null,
    user_name varchar(255) not null,
    user_email varchar(255) not null UNIQUE,
    PRIMARY KEY (user_id)
)

CREATE TABLE tasks (
    task_id int not null auto_increment,
    task_maker int not null,
    task_title varchar(255) not null,
    task_time DATE NOT NULL,
    PRIMARY KEY (task_id),
    FOREIGN KEY (task_maker) REFERENCES users(user_id)
)