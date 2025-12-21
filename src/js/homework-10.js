export class Vehicle {
    constructor(brand, model, color) {
        this.brand = brand
        this.model = model
        this.color = color
    }

    showInfo() {
        console.log(this.type, this.model, this.color)
    }
}

export class Car extends Vehicle {
    constructor(brand, model, color, doorsCount, seatsCount) {
        super(brand, model, color)
        this.doorsCount = doorsCount
        this.seatsCount = seatsCount
    }
}

export class Bike extends Vehicle {
    constructor(brand, model, color, frameType, gearsCount) {
        super(brand, model, color)
        this.frameType = frameType
        this.gearsCount = gearsCount
    }
}

export class Bus extends Vehicle {
    constructor(brand, model, color, passengerCap, length) {
        super(brand, model, color)
        this.passengerCap = passengerCap
        this.length = length
    }
}