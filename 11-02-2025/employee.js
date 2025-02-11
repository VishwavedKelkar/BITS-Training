// # Assignment
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ## Employee Management System
// Create Employee class with name, id, #salary.
// Subclasses: Manager, Engineer, Intern.
// Polymorphism: Override calculateBonus() for each role.
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (sal) {
            this.salary = sal;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.calculateBonus = function (salary) {
        return this.salary * 0.1;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Manager.prototype.calculateBonus = function (salary) {
        return this.Salary * 0.2;
    };
    return Manager;
}(Employee));
var m1 = new Manager("ABC", 1, 100000);
console.log("Salary of Manager ".concat(m1.name, " : ").concat(m1.Salary, " \nBonus for Manager : "), m1.calculateBonus(m1.Salary));
//output:
// Salary of Manager : 100000 
// Bonus for Manager :  20000
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Engineer.prototype.calculateBonus = function (salary) {
        return this.Salary * 0.1;
    };
    return Engineer;
}(Employee));
var eng = new Engineer("Engineer", 2, 50000);
console.log("Salary of an Engineer ".concat(eng.name, ": ").concat(eng.Salary, " \nBonus for Engineer :"), eng.calculateBonus(eng.Salary));
//output:
// Salary of an Engineer : 50000
// Bonus for Engineer : 5000
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Intern.prototype.calculateBonnus = function (salary) {
        return this.Salary * 0.05;
    };
    return Intern;
}(Employee));
var int1 = new Intern("Intern1", 3, 10000);
console.log("Salary of Intern ".concat(int1.name, ": ").concat(int1.Salary, " \nBonus for intern:"), int1.calculateBonnus(int1.Salary));
//output:
