DROP DATABASE cowlist;

CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cows (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL DEFAULT 'NULL',
  `description` VARCHAR(240) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (id),
  UNIQUE KEY (name)
);
