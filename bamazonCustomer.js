var mysql = require("mysql");
var inquirier = require("inquirier");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Marc987987!!12",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(connection.threadId);
    //displayProducts();
});