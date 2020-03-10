// TODO: Write code to define and export the Employee class
// var app = require("../app")

class Employee {
    constructor(answers){
        this.answers = answers;
    }

    getName(){
       return this.name= answers.employee_name;
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

// var newEmp = new Employee()



module.exports = Employee;

