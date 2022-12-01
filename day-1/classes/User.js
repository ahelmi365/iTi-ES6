console.log("This is User.js");

export class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printUser() {
        console.log(this.name, this.age, this.address);
    }
}

