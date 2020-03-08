// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name,id,title){
        this.name = name;
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

module.exports = Employee;

