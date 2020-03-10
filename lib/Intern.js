// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, school){
        this.name = name;
        this.id = id;
        this.title = title;
        this.school = school;
    }

    getSchool(){
        this.school = answers.intern_school;
    }

    getRole(){

    }
}