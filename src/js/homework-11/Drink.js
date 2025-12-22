export class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `Напиток: ${this.name}, \nразмер: ${this.size}, \nцена: ${this.price}, \nтемпература: ${this.#temperature}`
    }

    getTemperature() {
        return this.#temperature
    }

    setTemperature(value) {
        this.#temperature = value
    }

    #makeDrink() {
        return `${this.name} готовится...`
    }

    serve() {
        this.#makeDrink()
        return `Подаём ${this.name} (${this.size})`
    }
}