// ## Vehicle Rental System
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
// Create Vehicle class with brand, model, rentPricePerDay.
// Subclasses: Car, Bike, Truck.
// Polymorphism: Implement calculateRentalCost(days).
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    Vehicle.prototype.calculateRentalCost = function (days) {
        return this.rentPricePerDay * days;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentPricePerDay) {
        return _super.call(this, brand, model, rentPricePerDay) || this;
    }
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentPricePerDay) {
        return _super.call(this, brand, model, rentPricePerDay) || this;
    }
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, rentPricePerDay) {
        return _super.call(this, brand, model, rentPricePerDay) || this;
    }
    return Truck;
}(Vehicle));
var car = new Car('Toyota', 'Camry', 100);
var bike = new Bike('Yamaha', 'YZF-R3', 50);
var truck = new Truck('Ford', 'F-150', 150);
console.log("Rent of Car : ", car.calculateRentalCost(7));
console.log("Rent of Bike : ", bike.calculateRentalCost(4));
console.log("Rent of Truck : ", truck.calculateRentalCost(15));
//output:
