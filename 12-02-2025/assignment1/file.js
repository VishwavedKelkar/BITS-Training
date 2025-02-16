var Department = /** @class */ (function () {
    function Department(employees) {
        this.employees = employees;
    }
    ;
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
    };
    Department.prototype.getTotalSalary = function () {
        return this.employees.reduce(function (acc, emp) { return acc + emp.salary; }, 0);
    };
    Department.prototype.listEmployee = function () {
        this.employees.forEach(function (emp) {
            console.log("Employee '".concat(emp.name, "' with id ").concat(emp.id, " is at position '").concat(emp.position, "'"));
        });
    };
    return Department;
}());
function updateSalary(employee, newSalary) {
    employee.salary = newSalary;
    return employee;
}
var emp1 = {
    id: 1,
    name: "John",
    position: "Developer",
    salary: 50000
};
var emp2 = {
    id: 2,
    name: "Jane",
    position: "Manager",
    salary: 60000
};
var emp3 = {
    id: 3,
    name: "Bob",
    position: "Trainee",
    salary: 20000
};
var dept = new Department([emp1, emp2, emp3]);
// dept.listEmployee();
// console.log("Total Salary of all employees : ", dept.getTotalSalary());
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
// dept.listEmployee();
// console.log("Total Salary of all employees : ", dept.getTotalSalary());
//output:
// Employee 'John' with id 1 is at position 'Developer'
// Employee 'Jane' with id 2 is at position 'Manager'
// Employee 'Bob' with id 3 is at position 'Trainee'
// Employee 'Alice' with id 4 is at position 'Intern'
// Total Salary of all employees :  145000
// dept.removeEmployee(4);
// dept.listEmployee();
// console.log("Total Salary of all employees : ", dept.getTotalSalary());
//output:
// Employee 'John' with id 1 is at position 'Developer'
// Employee 'Jane' with id 2 is at position 'Manager'
// Employee 'Bob' with id 3 is at position 'Trainee'
// Total Salary of all employees :  130000
var updatedEmployee = updateSalary(emp2, 80000);
console.log("Updated Employee : ", updatedEmployee);
var genericStorage = /** @class */ (function () {
    function genericStorage(genericArary) {
        this.genericArray = [];
        this.genericArray = genericArary;
    }
    genericStorage.prototype.addItems = function (item) {
        this.genericArray.push(item);
    };
    genericStorage.prototype.remove = function (id) {
        this.genericArray = this.genericArray.filter(function (itm) { return itm !== id; });
    };
    genericStorage.prototype.getAll = function () {
        return this.genericArray;
    };
    return genericStorage;
}());
var gs = new genericStorage([emp1, emp2, emp3]);
var emp4 = {
    id: 10,
    name: "Smith",
    position: "Software Engineer",
    salary: 50000
};
// console.log(gs.addItems(emp4));
// console.log(gs.getAll());
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
// console.log(gs.remove(10));
// console.log(gs.getAll());
//output:
// [
//     { id: 1, name: 'John', position: 'Developer', salary: 50000 },
//     { id: 2, name: 'Jane', position: 'Manager', salary: 60000 },
//     { id: 3, name: 'Bob', position: 'Trainee', salary: 20000 }
// ]
