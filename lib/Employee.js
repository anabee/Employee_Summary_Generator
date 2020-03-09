// TODO: Write code to define and export the Employee class
const data = require("./app");

class Employee {
    constructor(name,id,title){
        this.name = getName();
        this.id = id;
        this.title = title;
    }

    getName(){
        this.name = answers.employee_name;
    }

    getId(){
        this.id = answers.employee_Id;
    }

    getEmail(){
        this.email = answers.employee_email;
    }

    getRole(){
        this.role = answers.employee_position;
    }

}

var newEmp = new Employee()

console.log(newEmp)

module.exports = Employee;

