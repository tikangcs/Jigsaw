CREATE DATABASE JIGSAW;

USE JIGSAW;

CREATE TABLE IF NOT EXISTS products (
  prodid integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(100),
  slogan varchar(250),
  description varchar(500),
  category varchar(100),
  default_price integer);

LOAD DATA LOCAL INFILE '~/Desktop/SDC_DATA/product.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



CREATE TABLE styles (
  styleid integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product integer,
  name varchar(100),
  sale_price integer,
  original_price integer,
  default_style integer);

LOAD DATA LOCAL INFILE '~/Desktop/SDC_DATA/styles.csv'
INTO TABLE styles
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



CREATE TABLE related (
  id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  currentprodid integer,
  relatedprodid integer);

LOAD DATA LOCAL INFILE '~/Desktop/SDC_DATA/related.csv'
INTO TABLE related
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;