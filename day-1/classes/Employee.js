console.log("This is Employee.js");

import { User } from "./User.js";

export class Employee extends User {
    constructor(name, age, address, salary) {
        super(name, age, address);
        this.salary = salary;
    }

    getSalary() {

        console.log(this.salary);
    }
}