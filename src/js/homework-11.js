class Drink {
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

class Lemonade extends Drink {
    constructor(name, size, price, temperature, fruitType) {
        super(name, size, price, temperature)
        this.fruitType = fruitType
    }

    getInfo() {
        return `${super.getInfo()}, фрукт: ${this.fruitType}`
    }
}

class Tea extends Drink {
    constructor(name, size, price, temperature, teaType) {
        super(name, size, price, temperature)
        this.teaType = teaType
    }

    getInfo() {
        return `${super.getInfo()}, тип чая: ${this.teaType}`
    }
}

class Coffee extends Drink {
    constructor(name, size, price, temperature, grainType, milkType) {
        super(name, size, price, temperature)
        this.grainType = grainType
        this.milkType = milkType
    }

    getInfo() {
        return `${super.getInfo()}, зёрна: ${this.grainType}, молоко: ${this.milkType}`
    }
}

class Cafe {
    #mainHr = `\n-===============-\n`
    #hr = `\n-==========-\n`

    constructor(name, location, drinkArr) {
        this.name = name
        this.location = location
        this.menu = drinkArr.map(drink => drink.getInfo()).join(`${this.#hr}`)
    }

    getInfo() {
        return `${this.#mainHr}Кафе: ${this.name}, местоположение: ${this.location}${this.#mainHr}`
    }

    getMenu() {
        return `${this.#mainHr}Меню:\n${this.menu}${this.#mainHr}`
    }

    makeOrder(drink) {
        console.log(`Заказ в кафе "${this.name}": ${drink.name}`)
        return drink.serve();
    }
}

const espresso = new Coffee(
  'Эспрессо',
  '60 мл',
  150,
  'горячий',
  'арабика',
  'без молока'
);

const americano = new Coffee(
  'Американо',
  '200 мл',
  180,
  'горячий',
  'арабика',
  'без молока'
);

const latte = new Coffee(
  'Латте',
  '300 мл',
  230,
  'горячий',
  'арабика',
  'коровье молоко'
);

const cappuccino = new Coffee(
  'Капучино',
  '250 мл',
  220,
  'горячий',
  'арабика',
  'коровье молоко'
);

const blackTea = new Tea(
  'Чёрный чай',
  '300 мл',
  120,
  'горячий',
  'чёрный'
);

const greenTea = new Tea(
  'Зелёный чай',
  '300 мл',
  130,
  'горячий',
  'зелёный'
);

const herbalTea = new Tea(
  'Травяной чай',
  '300 мл',
  140,
  'горячий',
  'травяной'
);

const icedTea = new Tea(
  'Холодный чай',
  '400 мл',
  150,
  'холодный',
  'чёрный'
);

const classicLemonade = new Lemonade(
  'Классический лимонад',
  '400 мл',
  150,
  'холодный',
  'лимон'
);

const orangeLemonade = new Lemonade(
  'Апельсиновый лимонад',
  '400 мл',
  170,
  'холодный',
  'апельсин'
);

const mintLemonade = new Lemonade(
  'Мятный лимонад',
  '400 мл',
  180,
  'холодный',
  'мята'
);

cofeeArr = [espresso, americano, latte, cappuccino];
teaArr = [blackTea, greenTea, herbalTea, icedTea];
lemonadeArr = [classicLemonade, orangeLemonade, mintLemonade];

const coffeeHouse = new Cafe("Кофейня", "Grove Street", cofeeArr);
const teaHouse = new Cafe("Чайхана", "China Town", teaArr);
const familyCafe = new Cafe("Torreto's", "Dominicano", lemonadeArr)

console.log(coffeeHouse.getInfo())
console.log(coffeeHouse.getMenu())
console.log(coffeeHouse.makeOrder(espresso))

console.log(teaHouse.getInfo())
console.log(teaHouse.getMenu())
console.log(teaHouse.makeOrder(herbalTea))

console.log(familyCafe.getInfo())
console.log(familyCafe.getMenu())
console.log(familyCafe.makeOrder(orangeLemonade))
