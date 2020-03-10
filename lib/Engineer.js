// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, github){
        this.name = name;
        this.id = id;
        this.title = title;
        this.github = github;
    }

    getGithub(){
        this.github = answers.engineer_githubUN
    }

    getRole(){

    }
}