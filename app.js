const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


function promptUser(){    
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name:"employee_name"
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
            type: "list",
            message: "What is your current position?",
            name:"employee_position",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your office number?",
            name:"manager_officeNumber",
            when: (answers)=> answers.employee_position === "Manager",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name:"engineer_githubUN",
            when: (answers)=> answers.employee_position === "Engineer",
        },
        {
            type: "input",
            message: "What school do you attend?",
            name:"intern_school",
            when: (answers)=> answers.employee_position === "Intern",
        }
    ])
    .then (answers=>{
        let employees = []
        if (answers.employee_position === "Manager"){
            var newManager = new Manager(answers.employee_name, answers.employee_Id, answers.employee_email, answers.manager_officeNumber);
            employees.push(newManager);
        } else if (answers.employee_position === "Engineer"){
            var newEngineer = new Engineer(answers.employee_name, answers.employee_Id, answers.employee_email, answers.engineer_githubUN);
            employees.push(newEngineer);
        } else if (answers.employee_position === "Intern"){
            var newIntern = new Intern(answers.employee_name, answers.employee_Id, answers.employee_email, answers.intern_school);
            employees.push(newIntern);
        }
        return employees
    })
    .then (employees=>{
        const renderedEmpl = render(employees);

        return writeFileAsync(outputPath,renderedEmpl)
    });
}

promptUser();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
