// TODO: Write code to define and export the Employee class
// const app = require("./app");

class Employee {
    constructor(name,id,title){
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName(){
       return this.name = results.employee_name;
    }

    getId(){
        return this.id = answers.employee_Id;
    }

    getEmail(){
        return this.email = answers.employee_email;
    }

    getRole(){
        return this.role = answers.employee_position;
    }

}

var newEmp = new Employee()

console.log(newEmp)

module.exports = Employee;

