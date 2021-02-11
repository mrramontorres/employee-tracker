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
    console.log('connected as id ' + connection.threadId +" \n");
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
            "Add a department.",
            "Add a role.",
            "Add an employee.",
            "Exit."
        ]
    })
    .then(function(answer) {
        switch (answer.choice) {

          case "View all departments.":
          viewAllDepartments();
          break;

          case "View all roles.":
          viewAllRoles();
          break;

          case "View all employees.":
          viewAllEmployees();
          break;

          case "Add a department.":
          addDepartment();
          break;

          case "Add a role.":
          addRole();
          break;

          case "Add an employee.":
          addEmployee();
          break;

          case "Exit.":
          connection.end();
          break;
        }

    });
};

// View all departments
// =======================
function viewAllDepartments() {
    let query = "SELECT * FROM departments";
    connection.query(query, 
        function(err,res){
            if(err) throw err;
            console.table(['Departments'], res);
        })
    startApp();
}

// View all roles
// =======================
function viewAllRoles() {
    let query = "SELECT * FROM roles";
    connection.query(query, 
        function(err,res){
            if(err) throw err;
            console.table(['Roles'], res);
        })
    startApp();
}

// View all employees
// =======================
function viewAllEmployees() {
    let query = "SELECT * FROM employees";
    connection.query(query, 
        function(err,res){
            if(err) throw err;
            console.table(['Employees'], res);
        })
    startApp();
}

// Add a department
// =======================
function addDepartment() {
    inquirer
    .prompt([
        {
            name: "addDepartment",
            type: "input",
            message: "What department would you like to add?"
        }
    ])
    .then(function(answer) {
    let query = "INSERT INTO departments (name) VALUES (?)";
    connection.query(query, [answer.addDepartment],
        function(err,res){
            if(err) throw err;
            console.clear();
            console.log("Department added.");
        });
    startApp();
    })
}

// Add a role
// =======================
function addRole() {
    const queryDepartment =  "SELECT * FROM departments";
    connection.query(queryDepartment, (err, results) => {
        if(err) throw err;

        inquirer
        .prompt([
            {
                name: "addTitle",
                type: "input",
                message: "What title would you like to add?"
            },
            {
                type: "input",
                name: "addSalary",
                message: "What is the salary?"
            },
            {
                name: "addDepartmentRole",
                type: "list",
                message: "What department is this for?",
                choices: results.map(obj =>  obj.name)
            },
        ])
        .then(function(answer) {
        let query = "INSERT INTO roles (title, salary, departments_id) VALUES (?, ?, ?)";
        connection.query(query, [answer.addTitle, answer.addSalary, answer.connectDep],
            function(err,res){
                if(err) throw err;
                console.clear();
                console.log("Role added.");
            });
        startApp();
        })
    })
}