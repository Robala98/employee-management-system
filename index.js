const consTable = require("console.table")
const mysql = require("mysql2");
const inquirer = require("inquirer");


function addEmployee() { 
    inquirer.prompt([
        {
          name: "first",
          type: "input",
          message: "Enter the first name "
        },
        {
          name: "last",
          type: "input",
          message: "Enter the last name "
        },
        {
          name: "role",
          type: "list",
          message: "What is the role? ",
          choices: selectRole()
        },
        {
            name: "choice",
            type: "list",
            message: "Whats the managers name?",
            choices: selectManager()
        }
    ]).then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1
      var managerId = selectManager().indexOf(val.choice) + 1
      connection.query("INSERT INTO employee SET ?", 
      {
          first_name: val.firstName,
          last_name: val.lastName,
          manager_id: managerId,
          role_id: roleId
          
      }, function(err){
          if (err) throw err
          console.table(val)
          startPrompt()
      })

  })
}