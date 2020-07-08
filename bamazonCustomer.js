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
    if (err){
        throw err;
    }else{
        console.log("Connection ThreadID: " + connection.threadId);
        display();
    } 
});

function display() {
    connection.query("SELECT * FROM products", function (err, res) {
        if(err){
            throw err;
        }else{
            // console.log(res);
            console.log("\n\n-----------------------");
            console.log("Products for sale");
            console.log("-----------------------");
            var products = [];
            for (let i = 0; i < res.length; i++) {
                products.push({ID: res[i].item_id, 
                    Item: res[i].product_name,
                    Department: res[i].department_name, 
                    Price: "$"+res[i].price, 
                    Stock: res[i].stock_quantity});
            };
            // var transProducts = products.reduce((acc, {ID, ...x}) => { acc[ID] = x; return acc}, {})
            // console.table(transProducts);
            console.table(products);
            run();
        }
    });
};

function run() {
    inquirer
    .prompt([
        {
            name: "itemID",
            type: "input",
            message: "Please enter the item ID: ",
        },
        {
            name: "purchaseAmount",
            type: "input",
            message: "How many would you like to purchase? "
        }
    ])
    .then(function (response) {
        connection.query("SELECT * FROM products WHERE item_id = ?", [response.itemID], function (err, res) {
            if (err){
                throw err;
            }else{
                for (let i = 0; i < res.length; i++) {
                    var purchaseAmount = parseInt(response.purchaseAmount);
                    var total = response.purchaseAmount * res[i].price;
                    var product_name = res[i].product_name;
                    var stock = res[i].stock_quantity - purchaseAmount;
                    if (purchaseAmount > res[i].stock_quantity) {
                        console.log("Insufficient quantity!");
                        connection.end();
                    }
                    else {
                        console.log("Item: " + product_name);
                        update(response.itemID, stock);
                        console.log(stock + " " + product_name + "'s left");
                    }
    
                    function update(item, stock) {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: stock
                                },
                                {
                                    item_id: item
                                }
                            ], function (err) { //(err,res is not required since its not used here? I was expecting an error w/o it...)
                                if (err){
                                    throw err;
                                }else{
                                    console.log("bamazon_db stock updated");
                                    connection.end();
                                    console.log("Total: $" + total)
                                }    
                            });
                    }
                }                
            }
        });
    })
};
