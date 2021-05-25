SET GLOBAL local_infile=1;

CREATE TABLE products (
  prodid integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  names varchar(100),
  slogan varchar(250),
  descriptions varchar(250),
  category varchar(100),
  default_price integer);

CREATE TABLE styles (
  styleid integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product integer,
  names varchar(100),
  sale_price integer,
  original_price integer,
  default_style integer);

CREATE TABLE related (
  id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  currentprodid integer,
  relatedprodid integer);

-- LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/product.csv'
-- INTO TABLE products
-- FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- LOAD DATA LOCAL INFILE 'product.csv'
-- INTO TABLE products
-- FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;