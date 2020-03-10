// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, officeNumber){
        this.name = name;
        this.id = id;
        this.title = title;
        this.officeNumber = officeNumber;
    }

    getSchool(){
        this.officeNumber = answers.manager_officeNumber;
    }

    getRole(){

    }

}