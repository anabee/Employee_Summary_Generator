// TODO: Write code to define and export the Employee class
// var app = require("../app")

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
       return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }

}

// var newEmp = new Employee()



module.exports = Employee;

