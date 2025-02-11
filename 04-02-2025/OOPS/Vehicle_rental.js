class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days) {
        return this.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.3;
    };
}


class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.1;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.5;
    }
}

const car = new Car('Maruti Suzuki', 'Celerio', 100);
const bike = new Bike('Yamaha', 'MT-07', 50);
const truck = new Truck('Tata Motors', 'Tata Yodha pickup', 200);
console.log(`Rental cost of car : ${car.calculateRentalCost(5)}`);
console.log(`Rental cost of bike : ${bike.calculateRentalCost(5)}`);
console.log(`Rental cost of truck : ${truck.calculateRentalCost(5)}`);
