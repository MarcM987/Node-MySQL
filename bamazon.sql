DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL UNIQUE,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Television", "Entertainment", 1599.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Bed & Bath", 38.99, 23);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Chair", "Office", 68.32, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Keyboard", "Electronics", 1599.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Xbox One", "Entertainment", 499.99, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Office", 23.39, 33);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("HeadPhones", "entertainment", 88.89, 23);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Printer", "Office", 129.99, 62);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 1299.99, 17);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Ipod", "Electronics", 253.63, 27);