class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }

    #salary;

    getSalary() {
        return this.#salary;
    }
    calculateBonus() {
        return this.#salary * 0.1;
    }

};

class Manager extends Employee {

    constructor(name, id, salary, department) {
        super(name, id, salary);
        this.department = department;
    }

    calculateBonus() {
        return this.getSalary() * 0.2;
    }
}

const mgr = new Manager("abc", 1, 80000, "IT");
console.log(`Manager's bonus : ${mgr.calculateBonus()}`);


class Engineer extends Employee {
    constructor(name, id, salary, project) {
        super(name, id, salary);
        this.project = project;
    }

    calculateBonus() {
        return this.getSalary() * 0.1;
    }
}

const eng = new Engineer("XYZ", 2, 60000, "IT");
console.log(`Engineer's bonus : ${eng.calculateBonus()}`);

class Intern extends Employee {
    constructor(name, id, salary, project) {
        super(name, id, salary);
        this.project = project;
    }

    calculateBonus() {
        return this.getSalary() * 0.05;
    }
}

const intern = new Intern("pqr", 3, 20000, "IT");
console.log(`Intern's bonus : ${intern.calculateBonus()}`);