var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Marc987987!!12",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection ThreadID: " + connection.threadId);
    display();
});

function display() {
    connection.query("SELECT * FROM products", function (err, res) {
        if(err) throw err;
        // console.log(res);
        console.log("\n\n-----------------------");
        console.log("Products for sale");
        console.log("-----------------------");
        // console.log("ID | Product | Department | Price | Stock");
        var products = [{}];
        for (let i = 0; i < res.length; i++) {
            // console.log(res[i].item_id + " | " 
            // + res[i].product_name + " | " 
            // + res[i].department_name + " | " 
            // + res[i].price + " | " 
            // + res[i].stock_quantity + " | ");

            products.push({ID: res[i].item_id, Item: res[i].product_name, Dept: res[i].department_name, Price: res[i].price, Stock: res[i].stock_quantity});

        };
        console.table(products);
        //start();
    });
};
