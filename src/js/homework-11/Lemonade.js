import { Drink } from './Drink.js'

export class Lemonade extends Drink {
    constructor(name, size, price, temperature, fruitType) {
        super(name, size, price, temperature)
        this.fruitType = fruitType
    }

    getInfo() {
        return `${super.getInfo()}, фрукт: ${this.fruitType}`
    }
}