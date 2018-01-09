CREATE database burgers_db;
USE burgers_db;
CREATE table burgers (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(100) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP
);
