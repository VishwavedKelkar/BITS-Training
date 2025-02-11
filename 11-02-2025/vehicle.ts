// ## Vehicle Rental System

// Create Vehicle class with brand, model, rentPricePerDay.
// Subclasses: Car, Bike, Truck.
// Polymorphism: Implement calculateRentalCost(days).

class Vehicle {
    brand: string;
    model: string;
    static rentPricePerDay: number;

    constructor(brand: string, model: string, rentPricePerDay: number) {
        this.brand = brand;
        this.model = model;
        // this.rentPricePerDay = rentPricePerDay; //if rentPricePerDay is not static 
    }

    calculateRentalCost(days: number): number {
        return Vehicle.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    constructor(brand: string, model: string, rentPricePerDay: number) {
        super(brand, model, rentPricePerDay);
    }
}

class Bike extends Vehicle {
    constructor(brand: string, model: string, rentPricePerDay: number) {
        super(brand, model, rentPricePerDay);
    }
}

class Truck extends Vehicle {
    constructor(brand: string, model: string, rentPricePerDay: number) {
        super(brand, model, rentPricePerDay);
    }
}

const car = new Car('Toyota', 'Camry', 100);
const bike = new Bike('Yamaha', 'YZF-R3', 50);
const truck = new Truck('Ford', 'F-150', 150);

console.log("Rent of Car : ", car.calculateRentalCost(7));
console.log("Rent of Bike : ", bike.calculateRentalCost(4));
console.log("Rent of Truck : ", truck.calculateRentalCost(15));

//output:
// Rent of Car :  700
// Rent of Bike :  200
// Rent of Truck :  2250