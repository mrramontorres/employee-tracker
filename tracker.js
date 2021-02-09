// Dependencies
// =============================================================
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
const Choices = require("inquirer/lib/objects/choices");

// Connect to the database
// =============================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "companyDB"
});

// Connection confirmation
// =============================================================
connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    startApp();
});

// Initiate prompt
// =============================================================
function startApp() {
  inquirer
    .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments.",
            "View all roles.",
            "View all employees.",
            "Exit."
        ]
    })
    .then(function(answer) {
        switch (answer.action) {

          case "View all departments.":
          console.log("1st");
          break;

          case "View all roles.":
          console.log("2nd");
          break;

          case "View all employees.":
          console.log("3rd");
          break;

          case "Exit.":
          connection.end();
          break;
        }
      });
};