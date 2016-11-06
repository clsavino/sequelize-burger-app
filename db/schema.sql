s### Schema
CREATE DATABASE seq_burgers_db;
USE seq_burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;



