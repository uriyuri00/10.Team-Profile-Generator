class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
       // console.log(`your name is ${this.name}`);
       return this.name
    }
    getId() {
        return this.id

    }
    getEmail() {
        return this.email

    }

    getRole(){
        return 'Employee'

    }

}
module.exports = Employee;