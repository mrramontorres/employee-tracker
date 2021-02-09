// Dependencies
// =============================================================
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connect to the database
// =============================================================
var connection = mysql.createConnection({

// Your port if not 3306
port: 3306,

// Your username
user: "root",

// Your password
password: "",
database: "company_DB"
});

// Connection confirmation
// =============================================================
connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.end();
  });
  