// # Assignment

// ## Employee Management System

// Create Employee class with name, id, #salary.
// Subclasses: Manager, Engineer, Intern.
// Polymorphism: Override calculateBonus() for each role.

class Employee {
    name: string;
    id: number;
    private salary: number;

    constructor(name: string, id: number, salary: number) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    get Salary() {
        return this.salary;
    }

    set Salary(sal) {
        this.salary = sal;
    }

    calculateBonus(salary: number): number {
        return this.salary * 0.1;
    }
}

class Manager extends Employee {
    constructor(name: string, id: number, salary: number) {
        super(name, id, salary);
    }
    calculateBonus(salary: number): number {
        return this.Salary * 0.2;
    }
}

class Engineer extends Employee {
    constructor(name: string, id: number, salary: number) {
        super(name, id, salary);
    }
    calculateBonus(salary: number): number {
        return this.Salary * 0.1;
    }
}

class Intern extends Employee {
    constructor(name: string, id: number, salary: number) {
        super(name, id, salary);
    }
    calculateBonnus(salary: number): number {
        return this.Salary * 0.05;
    }
}


const m1 = new Manager("ABC", 1, 100000);
const eng = new Engineer("Engineer", 2, 50000);
const int1 = new Intern("Intern1", 3, 10000);

console.log(`Salary of Manager ${m1.name} : ${m1.Salary} \nBonus for Manager : `, m1.calculateBonus(m1.Salary));
console.log(`Salary of an Engineer ${eng.name}: ${eng.Salary} \nBonus for Engineer :`, eng.calculateBonus(eng.Salary));
console.log(`Salary of Intern ${int1.name}: ${int1.Salary} \nBonus for intern:`, int1.calculateBonnus(int1.Salary));

//output:
// Salary of Manager : 100000
// Bonus for Manager :  20000

// Salary of an Engineer : 50000
// Bonus for Engineer : 5000

// Salary of Intern Intern1: 10000
// Bonus for intern: 500