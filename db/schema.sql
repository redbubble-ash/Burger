-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- CREATE TABLE burgers
-- (
--     id int NOT NULL AUTO_INCREMENT,
--     burger_name varchar(255) NOT NULL,
--     devoured BOOLEAN DEFAULT false,
--     PRIMARY KEY (id)
-- );

USE cvr68yclhou8kki9;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM cvr68yclhou8kki9.burgers;
