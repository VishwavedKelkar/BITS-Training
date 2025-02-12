interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

interface Manager extends Employee {
    employee: Employee;
    teamSize: number
}

class Department {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        this.employees = employees;
    };

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(id: number): void {
        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    getTotalSalary(): number {
        return this.employees.reduce((acc, emp) => acc + emp.salary, 0)
    }

    listEmployee(): void {
        this.employees.forEach(emp => {
            console.log(`Employee '${emp.name}' with id ${emp.id} is at position '${emp.position}'`)
        })
    }
}

function updateSalary<T extends Employee>(employee: T, newSalary: number): T {
    employee.salary = newSalary;
    return employee;
}


const emp1: Employee = {
    id: 1,
    name: "John",
    position: "Developer",
    salary: 50000
};

const emp2: Employee = {
    id: 2,
    name: "Jane",
    position: "Manager",
    salary: 60000
};

const emp3: Employee = {
    id: 3,
    name: "Bob",
    position: "Trainee",
    salary: 20000
};

const dept = new Department([emp1, emp2, emp3]);

dept.listEmployee();
console.log("Total Salary of all employees : ", dept.getTotalSalary());

//Output:
// Employee 'John' with id 1 is at position 'Developer'
// Employee 'Jane' with id 2 is at position 'Manager'
// Employee 'Bob' with id 3 is at position 'Trainee'
// Total Salary of all employees :  130000

dept.addEmployee({
    id: 4,
    name: "Alice",
    position: "Intern",
    salary: 15000
});

dept.listEmployee();
console.log("Total Salary of all employees : ", dept.getTotalSalary());

//output:
// Employee 'John' with id 1 is at position 'Developer'
// Employee 'Jane' with id 2 is at position 'Manager'
// Employee 'Bob' with id 3 is at position 'Trainee'
// Employee 'Alice' with id 4 is at position 'Intern'
// Total Salary of all employees :  145000

dept.removeEmployee(4);
dept.listEmployee();
console.log("Total Salary of all employees : ", dept.getTotalSalary());

//output:
// Employee 'John' with id 1 is at position 'Developer'
// Employee 'Jane' with id 2 is at position 'Manager'
// Employee 'Bob' with id 3 is at position 'Trainee'
// Total Salary of all employees :  130000



const updatedEmployee = updateSalary(emp2, 80000);
console.log(`Updated Employee : `, updatedEmployee);

//output:
// Updated Employee :  { id: 2, name: 'Jane', position: 'Manager', salary: 80000 }


class genericStorage<T> {
    genericArray: T[] = [];

    constructor(genericArary: T[]) {
        this.genericArray = genericArary;
    }

    addItems(item: T): void {
        this.genericArray.push(item);
    }

    remove(id: number): void {
        this.genericArray = this.genericArray.filter(itm => itm !== id);
    }

    getAll(): T[] {
        return this.genericArray;
    }
}

let gs = new genericStorage<Employee>([emp1, emp2, emp3])
const emp4: Employee = {
    id: 10,
    name: "Smith",
    position: "Software Engineer",
    salary: 50000
};

console.log(gs.addItems(emp4));
console.log(gs.getAll());

//output:
// [
//     { id: 1, name: 'John', position: 'Developer', salary: 50000 },
//     { id: 2, name: 'Jane', position: 'Manager', salary: 60000 },
//     { id: 3, name: 'Bob', position: 'Trainee', salary: 20000 },
//     {
//         id: 10,
//         name: 'Smith',
//         position: 'Software Engineer',
//         salary: 50000
//     }
// ]

console.log(gs.remove(10));
console.log(gs.getAll());

//output:
// [
//     { id: 1, name: 'John', position: 'Developer', salary: 50000 },
//     { id: 2, name: 'Jane', position: 'Manager', salary: 60000 },
//     { id: 3, name: 'Bob', position: 'Trainee', salary: 20000 }
// ]

