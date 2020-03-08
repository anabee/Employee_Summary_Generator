const inquirer = require("inquirer");
const fs = require("fs");

function promptUser(){   
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name:"employee_name"
        },
        {
            type: "list",
            message: "What is your current position?",
            name:"employee_position",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name:"employee_Id"
        },
        {
            type: "input",
            message: "What is your email?",
            name:"employee_email"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name:"github_username"
        },
    ])
    .then (answers => {
        console.log('Answer:', answers.employee_position)
    })
}

promptUser();