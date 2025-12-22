import { Drink } from './Drink.js'

export class Coffee extends Drink {
    constructor(name, size, price, temperature, grainType, milkType) {
        super(name, size, price, temperature)
        this.grainType = grainType
        this.milkType = milkType
    }

    getInfo() {
        return `${super.getInfo()}, зёрна: ${this.grainType}, молоко: ${this.milkType}`
    }
}