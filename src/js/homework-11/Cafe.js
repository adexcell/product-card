export class Cafe {

    constructor(name, location, drinkArr) {
        this.name = name
        this.location = location
        this.menu = drinkArr.map(drink => drink.getInfo()).join(`\n`)
    }

    getInfo() {
        return `Кафе: ${this.name}, местоположение: ${this.location}`
    }

    getMenu() {
        return `Меню:\n${this.menu}`
    }

    makeOrder(drink) {
        console.log(`Заказ в кафе "${this.name}": ${drink.name}`)
        console.log(drink.serve());
    }
}